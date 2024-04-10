import express from "express"
import pool from './database.config.js'

const app = express();
const port = 8081;

app.use(express.urlencoded({extended:true}))

app.get('/all-countries', async(req, res) => {
  try{
    const [rows] = await pool.query('SELECT * FROM countries');
    res.status(200).json(rows)
  } catch(err){
    console.error(err);
    res.status(500).json({message: 'Error fetching data'})
  }
  
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
