const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";
const { NODE_ENV, JWT_SECRET } = process.env;

const varifyToken = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers.authorization);
  const tokenHolder =
    req.body.token || req.query.token || req.headers.token;
   const tokenString=tokenHolder.toString();
   const tokenArray=tokenString.split(' ');
   const token=tokenArray[1];
   console.log(token);

  if (!tokenHolder) {
    return res.status(403).send("A token is required");
  }
  try {
    const decoded = jwt.verify(
      tokenHolder,
      NODE_ENV === "production" ? JWT_SECRET : "dev-secret"
    );
  } catch {
    return res.status(401).send("Invalid Token");
  }
  next();
};

export default varifyToken;
