import { Request, Response, NextFunction } from "express";
import User, { IUsers } from "../Schemes/UserSchema";
const bcrypt = require("bcryptjs");

const userHandler = {
  async addUser(email: string, password: string,name:string) {
    return User.create({ email, password ,name});
  },

  async findUserByCredentials(userEmail: string, userPassword: string) {
    return User.findOne({ email: userEmail })
      .select("+password")
      .then((user) => {
        if (!user) {
          return Promise.reject(new Error("Incorrect password or email"));
        }

        return bcrypt
          .compare(userPassword, user.password)
          .then((matched:boolean) => {
            if (!matched) {
              return Promise.reject(new Error("Incorrect password or email"));
            }
            return user;
          });
      });
  },

  async getAllUsers(){
    return User.find();
  }
};

export default userHandler;
