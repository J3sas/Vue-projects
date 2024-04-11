import express from "express"
import pool from './database.config.js'

const app = express();
const port = 8081;

app.use(express.urlencoded({extended:true}))

app.get('/all-countries', async (req, res) => {
  try {
    const result = await pool('SELECT * FROM countries');
    const countries = result[0]
    res.status(200).json(countries);

    console.log('BackendLOG', countries);
  } catch (err) {
    console.error('Error fetching countries:', err.message);
    res.status(500).json({ message: 'Failed to retrieve countries' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
