const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

const varifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send("A token is required");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decoded);
  } catch {
    return res.status(401).send("Invalid Token");
  }
  return next;
};

export default varifyToken;
