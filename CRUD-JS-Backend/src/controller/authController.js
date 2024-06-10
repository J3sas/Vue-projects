import bcrypt from "bcrypt";
import { users } from "../db/userDb.js";
import {loginService,registrationService} from "../service/authService.js"

export const hashAuthSample = async (req,res)=>{
  const hashSample = await bcrypt.hash('sampleHash',10);
  const hashedObject =  {
    hashSample: hashSample,
    anotherHash: hashSample
  }
   res.json({hashedObject}).status(200);
  // return hashedObject;
}

export const registrationController = async (req,res)=>{
  await registrationService(req,res)
}

  export const loginController = async (req,res)=>{
    await loginService(req,res);
  }