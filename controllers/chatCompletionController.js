const openai = require('../config/openaiConfig');

const generateChatCompletion = async (req, res) => {
  const system_role_content = "You reply as concisely as possible. If you are not sure about an answer, you will respond with \"I don't know\".";

  const messages = [
    { role: 'system', content: system_role_content },
    { role: 'user', content: req.body.user_role_content }
  ];

  const chatCompletion = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
    temperature: 0.5,
    max_tokens: 512
  });

  res.status(200).json({
    content: chatCompletion.choices[0].message.content
  });
};

const generateChatCompletionStream = async (req, res ) => {

  messages = [{
    'role': 'user', 'content': req.query.prompt
  }];

  const stream = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: messages,
    stream: true,
  });

  for await (const chunk of stream) {
    res.write(chunk.choices[0]?.delta?.content || "");
  }

  res.end();
}

module.exports = { generateChatCompletion,generateChatCompletionStream };