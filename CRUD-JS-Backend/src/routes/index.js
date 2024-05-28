import express from "express";
import heroesRoute from './heroesRoute/heroesRoutes'


const router = express.Router();

router.use('/heroes', heroesRoute )




export default router