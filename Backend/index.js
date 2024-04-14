import express from "express"
import pool from './database.config.js'

const app = express();
const port = 8081;

app.use(express.urlencoded({extended:true}))

app.get('/', async (req, res) => {
  res.send({message: 'This is the homepage'})

});

app.get('/all-countries', async(req,res)=>{
  try{
    const [countries] = await pool.query('SELECT * FROM countries');
    res.status(200).json(countries)
  } catch(err){
    res.status(500).json(err)
  }
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
