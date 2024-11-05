const express = require('express');
const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

app.post('/login', (req, res) => {
  const jsonData = req.body;
  console.log('Received JSON:', jsonData);
  res.json({ message: 'JSON received', data: jsonData });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
