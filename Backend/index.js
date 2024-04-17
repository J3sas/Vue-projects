import express from "express"
import pool from './database.config.js'

const app = express();
const port = 8081;

app.use(express.urlencoded({extended:true}))

app.get('/', async (req, res) => {
  res.send({message: 'This is the homepage'})

});

app.get('/all-countries', async (req, res) => {
  try {
    const [countries] = await pool.query('SELECT * FROM countries');
    res.setHeader('Content-Type', 'application/json');
    console.log(typeof countries);
    res.status(200).json(countries);
  } catch (err) {
    console.error('Error fetching countries:', err);
    res.status(500).json({ message: 'Error retrieving countries' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
