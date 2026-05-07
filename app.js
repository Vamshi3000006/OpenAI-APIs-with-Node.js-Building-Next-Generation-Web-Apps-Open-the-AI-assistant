// const express = require('express');

// const {generateChatCompletion} = require('./controllers/chatCompletionController');

// //app setup
// const app = express();
// app.listen(4000, () => console.log('listening to requests on port 4000'));

// //middleware
// app.use(express.json());
// app.use(express.static('public'));

// //routes
// app.post('/openai/intro/chatcompletion', generateChatCompletion);


const express = require('express');
const cors = require('cors');

const { generateChatCompletion,generateChatCompletionStream } = require('./controllers/chatCompletionController');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// routes
app.post('/openai/intro/chatcompletion', generateChatCompletion);

app.get('/openai/intro/chatcompletion_stream', (req,res) => {
  res.writeHead(200, {
    'Content-Typpe' : 'text/plain',
    'Transfer-Encoding': 'chunked'
  });

  generateChatCompletionStream(req,res);

  // Handle client disconnect 
  req.on('close', () => {
    res.end();
  });
});

app.listen(4000, () => console.log('listening to requests on port 4000'));