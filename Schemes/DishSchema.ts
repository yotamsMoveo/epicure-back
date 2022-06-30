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
    image: { type: String},
    description: { type:String},
    type: { type: String },
    price: { type:Number },
    dish_time: { type: String},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants"},
    active: { type: Boolean },
  },
  { collection: "Dishes" }
);

const DishModel = model<IDish>("Dishes", DishSchema)

export default DishModel;
