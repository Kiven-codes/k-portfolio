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

app.post("/", async (req, res) => {
  const { name, email, message, createdAt } = req.body;

  try {
    // Log the message details
    console.log("New message received:", {
      name,
      email, 
      message,
      createdAt
    });

    // Send success response
    res.status(200).json({ 
      success: true, 
      message: "Message received successfully!"
    });

  } catch (error) {
    console.error("Error processing message:", error);
    res.status(500).json({
      success: false,
      message: "Failed to process message"
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});