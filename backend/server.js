const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");

const sendEmailWithImage = async (imagePath) => {
  try {
    // Replace these with your Gmail address and App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your-email@gmail.com",
        pass: "your-app-password", // 👈 App Password from Google
      },
    });

    const mailOptions = {
      from: '"Newsletter Bot" <your-email@gmail.com>',
      to: "adityadrools@gmail.com", // You can add multiple if needed
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
  } catch (error) {
    console.error("❌ Failed to send email:", error);
  }
};

module.exports = sendEmailWithImage;
