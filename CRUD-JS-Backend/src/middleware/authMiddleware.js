import jwt from "jsonwebtoken";

export const authenticateToken = async(req,res, next)=>{
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(" ")[1];

  if(token === null) return res.status(401);

  jwt.verify(token, process.env.SECRET_ACCESS_TOKEN, (err, user)=>{
    if(err) return res.sendStatus(403);
    req.user = user;
    next();
  })
}