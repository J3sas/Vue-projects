import dotenv from "dotenv";
import express, {Express, Request, Response, NextFunction} from "express";
import cors from 'cors';
import { User } from "./model/user";
// import routeTesting from "./routes/heroesRoutes.js"
// import { users } from "./db/userDb.js";
// import {hashAuthSample,registrationController,loginController} from "./controller/authController.js";
// import {authenticateToken} from "./middleware/authMiddleware.js";


const sampleMiddleware = (req: any, res: any, next: () => void)=>{
  console.log("middleware working");
  next()
}

function sayHello(req: Request,res: Response, next:NextFunction){
  console.log('Hello :D')
  next();
}


const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));   
app.use(cors());

app.get('/', sayHello,(req,res)=>{
  res.send("TS + Node working :D")
})


const newUser = {
  id: 24,
  email: 'koBe',
  password: 'gro2',
  name: 'diMaPildi'
}

app.post('/post-user', async (req: Request, res: Response, next: NextFunction)=>{
  const newData = req.body;
  try{
    const respo = await User.create(newUser);
    console.log(respo);
    res.status(200).json(respo);
  } catch(err: unknown){
    console.log(err);
  }


})


app.get('/all-users', async (req: Request, res: Response,)=>{
  const respo = await User.findAll();
  res.status(200).json(respo);
})

// app.get('/users', sampleMiddleware, (req,res)=>{
//   res.json({users: users})
// })

// app.post('/whatUser', async(req,res)=>{
//   const user = users.filter(user=> user.username == req.user.username);
//   res.json(user);
// })

// app.get('/hashSample',  async(req,res)=>{
//   hashAuthSample(req,res);
// })
// app.post('/registration', async (req,res)=>{
//   registrationController(req,res);
// })


// app.post('/login', async(req, res)=>{
//   loginController(req,res)
// })

// app.use('/heroesRoute', routeTesting)


app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`); 
})