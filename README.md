# Recipe Daddy 
*Recipe finder*, for individual ingredients, or photos of your meal.

# Table of Contents 
1. [Project's Purpose](#️-projects-purpose)
2. [About](#-about)
3. [Challenges](#️-challenges) 
4. [Installation Guide](#-installation-guide) 

# ⭐️ Project's Purpose 
Ala’addin and I (Carlos) started this project as a way to teach ourselves the react framework from scratch. Although a better version of our website already exists [SuperCook.com](https://www.supercook.com/#/) We thought that this would be a good challenge to incorporate using API’s for the first time, working with ChatGPT, and most importantly, **teaching ourselves React.js**.

# 👨🏻‍🏫 About
This website gives you a break on finding the recipe for the night. You upload a photo of your fridge and get a list of recipes that you can make in return. Or alternatively, you can search and pick your ingredients.

# 🧗🏽‍♂️ Challenges 
* **Language learning** - We only know a little bit about JavaScript and resorted to having AI teach us the best paths forward when it came to React.
* **File formatting** - we don’t know what we don’t know. We’re making our best judgements for how to properly nest the components and how to handle the css/react. If you have any better suggestions please open an issue.

# 📦 Installation guide
After cloning: 
## Required Packages
From main directory: 
npm install node express @google-cloud/vision path fs dotenv openai multer cors axios
## Download Appropriate Packages 
1. Install required packages
2. **Run node server from *chatpgt-api-node.js* dir:** ```node --require dotenv/config index.js```
3. **Start the UI from root dir:** ```npm start```
