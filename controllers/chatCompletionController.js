const openai = require('../config/openaiConfig')

const generateChatCompletion = async (user_role_content) => {
  system_role_content = "You reply as concisely as possible. If you are not sure about an answer, you will respond with \" I don't know\"."
  
  messages = [
    { 'role': 'system', 'content': system_role_content},
    { 'role': 'user', 'content': user_role_content}
  ]
  const chatCompletion = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
    temperature: 0.5,
    max_tokens: 512
  });
  // console.log(chatCompletion.choices[0].message.content);
  // console.log(chatCompletion);
  console.log(chatCompletion.choices[0].message);
}


module.exports = { generateChatCompletion }