const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";
const { NODE_ENV, JWT_SECRET } = process.env;

const varifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required");
  }
  try {
    const decoded = jwt.verify(
      token,
      NODE_ENV === "production" ? JWT_SECRET : "dev-secret"
    );
  } catch {
    return res.status(401).send("Invalid Token");
  }
  next();
};

export default varifyToken;
