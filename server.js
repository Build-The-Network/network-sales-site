const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/offer', (req, res) => {
  res.sendFile(path.join(__dirname, 'offer.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});