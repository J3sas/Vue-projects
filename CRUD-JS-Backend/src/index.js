  import dotenv from "dotenv";
  import express from "express";
  import axios from "axios";
  import cors from 'cors';
  import heroesRoute from "./routes/index"
  dotenv.config();
  const app = express();
  const PORT = process.env.PORT || 8080;
  const apiURL = `https://65ef1759ead08fa78a4fc40d.mockapi.io/heroesApi`;

  app.use(express.urlencoded({extended:true}));
  app.use(cors());



  app.use("/heroesRoute", heroesRoute)

  app.get('/', (req,res)=>{
    res.send('WELCOME BOI')
  })

  // app.get(`/single-hero/${id}`, (req,res)=>{
  //   const id = req.params.id;
  //   res.status(200).send('success')
  // })

  app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`); 
  })