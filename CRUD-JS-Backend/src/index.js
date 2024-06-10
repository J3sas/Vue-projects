  import dotenv from "dotenv";
  import express from "express";
  import cors from 'cors';
  import routeTesting from "./routes/heroesRoutes.js"
  import bcrypt, { hash } from "bcrypt";
  import { users } from "./db/userDb.js";

  const app = express();
  dotenv.config();
  const PORT = process.env.PORT || 3000;

  app.use(express.urlencoded({extended:true}));
  app.use(cors());


  app.get('/users', (req,res)=>{
    res.json({users: users})
  })

  app.get('/hashSample', async(req,res)=>{
    const hashSample = await bcrypt.hash('sampleHash',10);
    res.json({
      hashSample: hashSample,
      anotherHash: hashSample
    }).status(200)
  })

  app.post('/registration', async (req,res)=>{

    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      id: users.length +1,
      username: req.body.username,
      password: hashedPassword
    }
    users.push(user);
    
    res.json(users).status(201);

  })


  app.post('/login', async(req, res)=>{
    const user = users.find(user => user.username === req.body.username);
    if (user == null){
      res.status(400).json({message: 'No user found'})
    }

    try{
      if (await bcrypt.compare(req.body.password, user.password)){
        res.send('Logged in :D');
      } else{
        res.send('Error! Wrong password or username!')
      }
    } catch(err){
      res.status(500).send();
    }


  })


  app.use('/heroesRoute', routeTesting)


  app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`); 
  })