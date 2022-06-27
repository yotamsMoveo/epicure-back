

import { Schema, model } from "mongoose";

export interface IUsers {
  name: string;
  email: string;
  password: string;
  token: string;
}

const userSchema = new Schema<IUsers>(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
  },
  { collection: "users" }
  
);



const User = model<IUsers>("User", userSchema);
export default User;