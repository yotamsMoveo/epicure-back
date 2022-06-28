import chefsRouter from "../Routers/chefsRouter";
import restaurantHandler from "./restaurantsHandler"; 
import ChefsModel, { IChef } from "../Schemes/ChefSchema";
import RestaurantModel from "../Schemes/RestaurantSchema";
import DishModel from "../Schemes/DishSchema";

const chefHandler = {
  async getChefsList() {
    return ChefsModel.find({ active: true });
  },

  async postChef(data: IChef) {
    return ChefsModel.create(data);
  },
  async updateChef(chefId: string, updatedChefObject: object) {
    const updatedChef = {
      _id: chefId,
      ...updatedChefObject,
    };
    const updateResponse = await ChefsModel.findOneAndUpdate(
      { _id: chefId },
      updatedChef,
      { new: true }
    );
    return updateResponse;
  },
  
  async deleteChef(chefId:string){
    try{
      const allRestaurants=await RestaurantModel.find({chef:chefId});
      allRestaurants.forEach(restaurant => {
        DishModel.findByIdAndDelete(restaurant._id);
        RestaurantModel.deleteOne(restaurant._id);
      });
      ChefsModel.deleteOne({_id:chefId});
    }
    catch(error){
      console.log(error);
    } 
  }
};



export default chefHandler;
