const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Example route
app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Learn CI/CD', done: false },
    { id: 2, title: 'Build full stack app', done: true },
  ]);
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
