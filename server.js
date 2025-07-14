const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;

app.use(express.json());

app.post('/upload', (req, res) => {
  const trade = req.body;
  console.log('Received trade:', trade);
  res.json({ success: true, message: 'Trade saved' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
