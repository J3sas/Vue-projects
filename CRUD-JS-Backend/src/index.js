  import dotenv from "dotenv";
  import express from "express";
  import cors from 'cors';
  import routeTesting from "./routes/heroesRoutes.js"

  const app = express();
  dotenv.config();
  const PORT = process.env.PORT || 3000;


  app.use(express.urlencoded({extended:true}));
  app.use(cors());


  app.get('/', (req,res)=>{
    res.send('WELCOME BOI')
  })

  app.post('/login', async (req,res)=>{

    const salt = await bcrypt.genSalt();

    const user = {
      usename: req.body.username,
      password: salt + req.body.password
    }
    res.json(user).status(200);

  })

  app.use('/heroesRoute', routeTesting)


  app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`); 
  })