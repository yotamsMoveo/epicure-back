import { NextFunction, Request, Response } from "express";
import userHandler from "../Handlers/authHandler";
import { IUsers } from "../Schemes/UserSchema";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { NODE_ENV, JWT_SECRET } = process.env;

const userController = {
  async register(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const encryptedPassword = await bcrypt.hash(password, 10);
      const newUser: any = await userHandler.addUser(email, encryptedPassword);
      console.log(newUser);
      if (newUser) {
        res.send(newUser);
      }
    } catch (error) {
      console.log(error);
    }
  },

  async login(req: Request, res: Response, next: NextFunction) {
    const { email, password } = req.body;
    return userHandler
      .findUserByCredentials(email, password)
      .then((user:any) => {
        console.log(user);
        if (user) {
          console.log(user);
          const token = jwt.sign(
            { _id: user._id },
            NODE_ENV === "production" ? JWT_SECRET : "dev-secret",
            { expiresIn: "7d" }
          );
          res.send({ token });
        }
      })
      .catch((err:string) => {
        if (err) {
          throw new Error("authorization failed");
        }
      })
      .catch(next);
  },
  
  async getAllUsers(req:Request,res:Response){
    try {
        const result = await userHandler.getAllUsers();
        res.status(200).json({
          status: "Success",
          data: result,
        });
      } catch (error) {
        console.log(error);
      }
  }
};

export default userController;
