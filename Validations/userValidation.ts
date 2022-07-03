const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";

const userValidation = {
  async varifyLogin(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    next();
  },

  async varifyRegister(req: Request, res: Response, next: NextFunction) {
    const { name, email, password } = req.body;
    
  
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }
    
    next();
  },
};

export default userValidation;
