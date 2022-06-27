import mongoose, { model, Schema } from "mongoose";
import { IRestaurant } from "./RestaurantSchema";

export interface IDish {
  name: string;
  image: string;
  description: string;
  type: string;
  price:number;
  dish_time:string;
  restaurant:IRestaurant;
  active:boolean;
}

const DishSchema = new Schema<IDish>(
  {
    name: { type: String },
    image: { type: String, unique: true },
    description: { type:String},
    type: { type: String },
    price: { type:Number },
    dish_time: { type: String, require: true },
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants", required: true },
    active: { type: Boolean, required: true },
  },
  { collection: "Dishes" }
);

const DishModel = model<IDish>("Dishes", DishSchema)

export default DishModel;
