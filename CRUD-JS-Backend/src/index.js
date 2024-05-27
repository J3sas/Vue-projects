  import dotenv from "dotenv";
  import express from "express";
  import axios from "axios";
  import cors from 'cors';

  dotenv.config();
  const app = express();
  const PORT = process.env.PORT || 8080;
  const apiURL = `https://65ef1759ead08fa78a4fc40d.mockapi.io/heroesApi`;

  app.use(express.urlencoded({extended:true}));
  app.use(cors());

  app.get('/', (req,res)=>{
    res.send('WELCOME BOI')
  })

  app.get('/all-heroes',async (req,res)=>{
    try {
      const response = await axios.get(apiURL);
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to fetch heroes" });
    }  
  })

  app.delete(`/delete-hero/:id`, async (req,res)=>{
    try{
      const id = req.params.id;
      const response = await axios.delete(`${apiURL}/${id}`);
      res.status(200).send(response.status);
    } catch(err){
      res.status(err.response?.status || 500).send(err.message);
    }
  })

  app.post('new-hero', async (req,res)=>{
    
  })

  app.get(`/single-hero/:id`, (req,res)=>{
    const id = req.params.id;
    res.status(200).send('success')
  })

  app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`); 
  })