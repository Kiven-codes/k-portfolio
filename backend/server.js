const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// GET endpoint
app.get('/api/messages', (req, res) => {
  res.json({ message: 'Hello from backend' });
});

app.post("/", async (req, res) => {
  // ...existing code...
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});