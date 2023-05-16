/**
 * Store application openai secret key
 */
const apiKey = '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';
const endPoint = 'https://api.openai.com/v1/chat/completions';

/**
 * Store all prompts here.
 */
const PromptText = {
    name: 'promptText',
    randomRecipes: `
        You are a specialist cook from any continent, with more than 15 years of experience in cooking, you know how to do everything. 
        Give me 5 famous recipes in json format.
        Send only the json, without any overflow text.
        Don't comment, just send json.
    `,
    createRecipes: (recipe) => `
        You are a specialist cook from any continent, with more than 15 years of experience in cooking, you know how to do everything. 
        Give the list of ingredients and quantities needed to prepare the following dish: "${recipe}", in the form of JSON, translate this JSON into french.
        Be careful, send only the json without comment, 
        Automatically send only the json of the list,
        Includes an estimation of the cooking time.
    `,
};

/**
 * Handle prompt submit.
 * 
 * @param {*} api_key 
 * @param {*} prompt 
 * @param {*} tokens 
 */
const sendPrompt = async (api_key, prompt, tokens = 3000) => {
    let response = null;

    await fetch(endPoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${api_key}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                  role: 'user',
                  content: prompt
                }
              ],
            max_tokens: tokens,
        })
        })
        .then(response => response.json())
        .then(data => {
            response = data.choices[0].message.content;
            console.log(response);
    });

    return response;
}

/**
 * Prompt manager
 * This object goal is to communicate with GPT
 */
const PromptManager = {
    name: 'promptManager',
    getRandomRecipes: () => sendPrompt(apiKey, PromptText.randomRecipes),
    getRecipes: (recipe) => {
        return new Promise((resolve, reject) => {
            sendPrompt(apiKey, PromptText.createRecipes(recipe))
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    },
};

export default PromptManager;