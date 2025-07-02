const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
// Add this above the POST route
app.get("/", (req, res) => {
  res.send("✅ Email server is up and running.");
});
app.use(express.json());

// POST route to send email with image
app.post("/send-email", async (req, res) => {
  try {
    const imagePath = path.join(__dirname, "selfie.jpg"); // Make sure this file exists

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adityadrools@gmail.com",
        pass: "jxqvmogganjsycpm",
      },
    });

    const mailOptions = {
      from: '"Newsletter Bot" <your-email@gmail.com>',
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
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    res.status(500).send("Failed to send email");
  }
});

// Start the server (required for Render)
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
