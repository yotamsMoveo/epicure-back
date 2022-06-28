import { model, Schema } from "mongoose";
export interface IChef {
  name: string;
  image: string;
  description: string;
  active: boolean;
}
const ChefSchema = new Schema<IChef>(
  {
    name: {
      type: String,
      min: [1, "Chef  Name can't be empty"],
      required: true,
    },
    image: { type: String, min: [1, "Image can't be empty"], required: true },
    description: { type: String, require: true },
    active: { type: Boolean, required: true },
  },
  { collection: "Chefs" }
);

const ChefModel = model<IChef>("Chefs", ChefSchema);

export default ChefModel;
