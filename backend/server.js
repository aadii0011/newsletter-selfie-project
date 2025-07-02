const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const multer = require("multer");
const sendEmailWithImage = require("./sendEmailWithImage");

require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const filePath = path.join(__dirname, req.file.path);
    const fileName = req.file.originalname;
    await sendEmailWithImage(filePath, fileName);
    res.status(200).json({ message: "Selfie sent via email!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send selfie" });
  }
});

// ✅ Correct Render port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
