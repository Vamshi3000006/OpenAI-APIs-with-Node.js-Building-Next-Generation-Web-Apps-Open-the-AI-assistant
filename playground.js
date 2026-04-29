// console.log("hello openai Apis");

const readline = require('readline');
const { generateChatCompletion } = require('./controllers/chatCompletionController');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

////////////// CHAT COMPLETION - START ////////////////////
r1.question("Enter Prompt to send for GPT3.5 ChatCompletion Model: \n", 
  (user_role_content) => {
    generateChatCompletion(user_role_content)
  });
////////////// CHAT COMPLETION - END //////////////////////