const readline = require('readline');
const { generateChatCompletion,generateChatCompletionStream } = require('./controllers/chatCompletionController');

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// r1.question("Enter Prompt to send for GPT3.5 ChatCompletion Model: \n", 
//   (user_role_content) => {
//     const req = {
//       body: {
//         user_role_content: user_role_content
//       }
//     };

//     const res = {
//       status: function(statusCode) {
//         return {
//           json: function(data) {
//             console.log(data.content);
//             r1.close();
//           }
//         };
//       }
//     };

//     generateChatCompletion(req, res);
//   }
// );

r1.question("Enter Prompt to send for GPT3.5 ChatCompletion Model: \n", 
  (user_role_content) => generateChatCompletionStream(user_role_content)
) 
