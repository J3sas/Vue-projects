import express from "express";
import { getAllHeroes, deleteHero } from "../controller/heroesController.js";

const router = express.Router();
const apiURL = `https://65ef1759ead08fa78a4fc40d.mockapi.io/heroesApi`;


router.get('/test', async(req,res)=>{
  res.send("hello");
})

router.get('/all-heroes',async (req,res)=>{
  try{
    const response = await getAllHeroes();
    res.status(200).json(response)
  } catch(error){
    console.log(error);
    res.status(500).send(error);
  }
})

router.delete(`/delete-hero/:id`, async (req,res)=>{
  try{
    const id = req.params.id;
    const response = await deleteHero(id);
    res.status(200).send(response);
  } catch(err){
    res.status(err.response?.status || 500).send(err.message);
  }
})

router.post('/new-hero', async (req,res)=>{
 
})

router.patch('/editHero', async (req,res)=>{

})


export default router;