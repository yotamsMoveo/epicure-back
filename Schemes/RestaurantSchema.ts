
import mongoose from "mongoose";
import { IChef } from "./ChefSchema";
import { IDish } from "./DishSchema";
import { Schema, model } from "mongoose";

export interface IRestaurant {
  name: string;
  image: string;
  chef: IChef;
  open_hour: number;
  open_date:Date;
  rating:number;
  signatureDish:IDish;
  active:boolean;
}
const restaurantSchema = new Schema<IRestaurant>(
  {
    name: { type: String },
    image: { type: String, unique: true },
    chef: { type:mongoose.Schema.Types.ObjectId, ref: "Chefs"},
    open_hour: { type: Number },
    open_date: { type: Date, required: true },
    rating: { type: Number, required: true },
    signatureDish: { type: mongoose.Schema.Types.ObjectId, ref: "Dishes" },
    active: { type: Boolean, required: true },
  },
  { collection: "Restaurants" }
);

const RestaurantModel = model<IRestaurant>("Restaurants", restaurantSchema);

export default RestaurantModel;
