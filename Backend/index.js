import express from "express";
import Country from "./models/country.ts";

const app = express();
const port = 8081;

app.use(express.urlencoded({extended:true}))

app.get('/', async (req, res) => {
  res.json({message: 'Balay ni mayang'})

});

app.get('/all-countries', async (req, res) => {
  try {
    const countries = await Country.findAll();
    res.json(countries)
  } catch (error) {
    console.error('Error retrieving countries:', error);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
