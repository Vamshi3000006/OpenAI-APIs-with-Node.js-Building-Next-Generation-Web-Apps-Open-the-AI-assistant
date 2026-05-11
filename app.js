const express = require('express');
const cors = require('cors');

const {
  generateChatCompletion,
  generateChatCompletionStream
} = require('./controllers/chatCompletionController');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/openai/intro/chatcompletion', generateChatCompletion);

// add this
app.get('/openai/intro/chatcompletion_stream', generateChatCompletionStream);

app.listen(4000, () => {
  console.log('Server running on port 4000');
});