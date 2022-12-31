const config = require('./config')

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: process.env.OPEN_AI_ORG,
    apiKey: process.env.OPEN_AI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const prompt = async (text) => {
    const response = await openai.createCompletion({
        model: config.openAIModel,
        prompt: text,
        temperature: config.temperature,
        max_tokens: config.max_tokens,
        n: config.n
    })

    const choice = response.data.choices[0];
    if(choice) return choice.text;
    return '';
}

module.exports = {
    prompt
}