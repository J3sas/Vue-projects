import express, { Request, Response } from "express";
import dotenv from "dotenv";
// import Country from "./database/models/Country"

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response) => { 
  res.send('Shaman king to the earth')
}); 


// app.get("/all-countries", async (_req: Request, res: Response) => { 
//   try {
//     const allCountries = await Country.findAll();
//     res.status(200).send(allCountries)    
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }); 


app.listen(PORT, () => { 
  console.log("Server running at PORT: ", PORT); 
}).on("error", (error) => {
  throw new Error(error.message);
});