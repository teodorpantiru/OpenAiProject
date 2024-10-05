"use server"
import OpenAI from "openai";


const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})


export const generateChatResponse = async (chatMessages) => {
    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are a helpful assistant' },
                ...chatMessages,
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
        })

        return response.choices[0].message;

    } catch (error) {
        console.log(error)
        return null
    }

}

export const getExistingRecipe = async ({ recipe }) => {
    return null
}
export const generateRecipeResponse = async (ingredient) => {
    console.log(ingredient);
    const query = `Find a ${ingredient}. If this ${ingredient} exists, create a list of other food recipes related to that. Once you have a list, 
    create a recipe for that food. Response should be in the following JSON format:
    {
  "recipe": {
    "title": "Mashed Potatoes",
    "prep_time": "20 minutes",
    "cook_time": "15 minutes",
    "ingredients": [
      "5 pounds of potatoes", "2 large cloves garlic, minced", "fine sea salt", "6 tablespoons butter", "1 cup whole milk", "4 ounces cream cheese, room temperature", "toppings: chopped fresh chives or green onions, freshly-cracked black pepper"
    ],
    "instructions": [
      { "step": 1, "description": "Cut the potatoes. Peel or leave the skins on. Cut into evenly-sized chunks, about an inch thick. Transfer them to a stockpot full of cold water." },
      { "step": 2, "description": "Boil the potatoes. Add garlic and 1 tablespoon salt. Boil for about 10-12 minutes. Drain the water." },
      { "step": 3, "description": "Prepare melted butter mixture with butter, milk, and salt. Set aside until ready." },
      { "step": 4, "description": "Pan-dry the potatoes. Shake gently on the burner for 1 minute to cook off remaining steam." },
      { "step": 5, "description": "Mash the potatoes to your desired consistency." },
      { "step": 6, "description": "Stir in melted butter mixture, cream cheese, and fold until just combined." },
      { "step": 7, "description": "Taste and season with extra salt and black pepper." },
      { "step": 8, "description": "Serve warm, garnished with any extra toppings." }
    ]
  },
  "related_recipes": [
    {
      "title": "Garlic Parmesan Roasted Potatoes",
      "prep_time": "10 minutes",
      "cook_time": "30 minutes",
      "ingredients": [
        "2 pounds baby potatoes, halved", "2 tablespoons olive oil", "4 cloves garlic, minced", "1/2 cup grated Parmesan cheese", "salt and pepper", "1 tablespoon chopped parsley"
      ],
      "instructions": [
        { "step": 1, "description": "Preheat the oven to 400°F. Toss potatoes with olive oil, garlic, salt, pepper, and Parmesan." },
        { "step": 2, "description": "Spread potatoes on a baking sheet. Roast for 25-30 minutes." },
        { "step": 3, "description": "Garnish with parsley before serving." }
      ]
    },
    {
      "title": "Loaded Mashed Potatoes",
      "prep_time": "15 minutes",
      "cook_time": "10 minutes",
      "ingredients": [
        "4 cups mashed potatoes", "1/2 cup sour cream", "1 cup shredded cheddar cheese", "1/4 cup cooked bacon, crumbled", "2 tablespoons chopped chives", "salt and pepper"
      ],
      "instructions": [
        { "step": 1, "description": "Mix mashed potatoes with sour cream, cheese, and bacon. Season with salt and pepper." },
        { "step": 2, "description": "Top with remaining cheese and bake at 350°F for 10 minutes." },
        { "step": 3, "description": "Garnish with chives before serving." }
      ]
    },
    {
      "title": "Potato Pancakes",
      "prep_time": "10 minutes",
      "cook_time": "15 minutes",
      "ingredients": [
        "2 cups mashed potatoes", "1 egg, beaten", "1/4 cup all-purpose flour", "1/4 cup green onions, chopped", "salt and pepper", "oil for frying"
      ],
      "instructions": [
        { "step": 1, "description": "Mix mashed potatoes, egg, flour, and onions. Season with salt and pepper." },
        { "step": 2, "description": "Heat oil in a pan. Spoon mixture into pan to form pancakes." },
        { "step": 3, "description": "Fry for 3-4 minutes per side until golden brown." }
      ]
    }
  ]
}


    In the case of related recipes related_recipes I need 6 different arrays. Use the model provided. If you can't find the exact ${ingredient} or ${ingredient} does not exist, return {"recipe": null}, with no aditional characters.
     `

    try {
        const response = await openai.chat.completions.create({
            messages: [
                { role: 'system', content: 'you are a food chef' }, {
                    role: 'user', content: query,
                },
            ],
            model: 'gpt-3.5-turbo',
            temperature: 0,
        })
        const foodData = JSON.parse(response.choices[0].message.content)
        if (!foodData) {
            return null
        }
        return foodData


    } catch (error) {
        console.log(error)

    }
    return null
}
export const createNewRecipe = async ({ recipe }) => {
    return null
}