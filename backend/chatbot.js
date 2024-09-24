const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
app.use(cors());
const port = 3000;

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

app.use(express.json());

app.post('/generate-content', async (req, res) => {
  try {
    const { chatHistory } = req.body;
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

    const conversation = chatHistory.map((chat) => `${chat.from}: ${chat.message}`).join('\n');
    
    const result = await model.generateContent([conversation]);

    res.json({ response: result.response.text() });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
