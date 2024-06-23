import bcrypt from "bcrypt";
import { users } from "../db/userDb.js";
import jwt from "jsonwebtoken";

export const registrationService = async (req,res)=>{
  const userTaken = users.find(user => user.name === req.body.username);
  if(userTaken){
    res.sendStatus(409);
  } else{
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = {
      id: users.length +1,
      username: req.body.username,
      password: hashedPassword
    }
    users.push(user);     
    res.json(users).status(201);
  }
}


export const loginService = async (req,res)=>{
  const user = users.find(user => user.username === req.body.username);
  if (user == null){
    res.status(400).json({message: 'No user found'})
  }
  try{
    if (await bcrypt.compare(req.body.password, user.password)){
      const accessToken = jwt.sign(user, process.env.SECRET_ACCESS_TOKEN);
      res.json({accessToken: accessToken})
      // res.json({message: 'Logged in'})
    } else{
      res.send('Error! Wrong password or username!')
    }
  } catch(err){
    res.status(500).send();
  }

}