import express from "express";
import axios from "axios";
const router = express.Router();

router.get('/all-heroes',async (req,res)=>{
  try {
    const response = await axios.get(apiURL);
    res.status(200).json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to fetch heroes" });
  }  
})

router.delete(`/delete-hero/:id`, async (req,res)=>{
  try{
    const id = req.params.id;
    const response = await axios.delete(`${apiURL}/${id}`);
    res.status(200).send(response.status);
  } catch(err){
    res.status(err.response?.status || 500).send(err.message);
  }
})

router.post('new-hero', async (req,res)=>{

})


export default router;