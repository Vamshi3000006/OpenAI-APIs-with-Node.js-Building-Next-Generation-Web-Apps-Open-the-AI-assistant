const { default: OpenAI } = require("openai")
require('dotenv').config()

const openai = new OpenAI({
    apiKey: process.env.OpenAI_API_KEY,
    organization: 'org-7iBKiaLovHC01QsmNl8A2yIj',
    project: 'proj_I2yC3N0BAIX7RPVzZAUK1fDw',
})
module.exports = openai