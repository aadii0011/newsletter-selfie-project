import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';

const AutoSelfie = () => {
  const webcamRef = useRef(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (cameraReady) {
      const timer = setTimeout(() => {
        captureAndSend();
      }, 1500); // Wait 1.5 seconds before capturing
      return () => clearTimeout(timer);
    }
  }, [cameraReady]);

  const captureAndSend = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    try {
      await fetch('http://localhost:3001/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageSrc }),
      });

      setSubmitted(true);
    } catch (error) {
      console.error('❌ Error uploading selfie:', error);
    }
  };

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: 'user', // front-facing camera
  };

  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2>📸 Taking Your Selfie Automatically...</h2>

      {!submitted ? (
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={{ width: 640, height: 480, facingMode: 'user' }}
          onUserMedia={() => {
            console.log("✅ Camera ready");
            setCameraReady(true);
          }}
          onUserMediaError={(err) => {
            console.error("❌ Camera error", err);
          }}
        />

      ) : (
        <h3>✅ Selfie sent successfully!</h3>
      )}
    </div>
  );
};

export default AutoSelfie;
