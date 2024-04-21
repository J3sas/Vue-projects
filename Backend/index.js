import express from "express"
import Country from './models/countries'

const app = express();
const port = 8081;

app.use(express.urlencoded({extended:true}))

app.get('/', async (req, res) => {
  res.send({message: 'This is the homepage'})

});

app.get('/all-countries', async (req,res)=>{
  const users = await Country.findAll();
  console.log(users);
  res.send(users.json)
})
  

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
