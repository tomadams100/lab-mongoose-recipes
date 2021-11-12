const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
const fillDataBase = async () => {
  try {
    await mongoose
    .connect(MONGODB_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log(`Connected to the database"`);
    /* Recipe.deleteMany()

    const recipe =
    {
      title: "Lasagna",
      level: "Amateur Chef",
      ingredients: ["pasta","beef","cheese", "tomato sauce"],
      cuisine: "Italian",
      dishType: "main_course",
      image: "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
      duration: 60,
      creator: "Tom & Dani"
    }

    const createdRecipe = await Recipe.create(recipe);
    console.log(createdRecipe);  

    const createdRecipeMany = await Recipe.insertMany(data)
   const updateRecipe = await Recipe.findOneAndUpdate(
      {title: "Rigatoni alla Genovese"},
      {duration: 100}
    ) 
    const deleteReceipe = await Recipe.deleteOne(
      {title:"Carrot Cake"}
    )
    */
  }
  catch (error) {
    console.log(error)
  }
  console.log("Disconnecting from the database...");
  mongoose.disconnect();
}
fillDataBase()
  