const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

app.post('/upload', (req, res) => {
  const { image } = req.body;
  if (!image) return res.status(400).send('No image provided');

  const base64Data = image.replace(/^data:image\/jpeg;base64,/, '');
  const filename = `selfie-${Date.now()}.jpg`;
  const filePath = path.join(uploadDir, filename);

  fs.writeFile(filePath, base64Data, 'base64', (err) => {
    if (err) {
      console.error('Failed to save image:', err);
      return res.status(500).send('Failed to save image');
    }
    console.log('Selfie saved:', filename);
    res.send('Image uploaded successfully');
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
