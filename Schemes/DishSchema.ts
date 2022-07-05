import mongoose, { model, Schema } from "mongoose";
import { IRestaurant } from "./RestaurantSchema";

export interface IDish {
  name: string;
  image: string;
  description: string;
  type: string[];
  price:number;
  dish_time:string;
  restaurant:IRestaurant;
  active:boolean;
}

const DishSchema = new Schema<IDish>(
  {
    name: { type: String ,unique:false},
    image: { type: String,unique:false},
    description: { type:String ,unique:false},
    type: [{ type: String ,unique:false}],
    price: { type:Number ,unique:false},
    dish_time: { type: String,unique:false},
    restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurants",unique:false},
    active: { type: Boolean,default:true },
    
  },
  { collection: "Dishes" }
);

const DishModel = model<IDish>("Dishes", DishSchema)

export default DishModel;
