import chefsRouter from "../Routers/chefsRouter";
import DishModel from "../Schemes/DishSchema";
import RestaurantModel, { IRestaurant } from "../Schemes/RestaurantSchema";

const restaurantHandler = {
  async getRestaurantsList() {
    return RestaurantModel.find({ active: true }).populate("chef");
  },

  async postRestaurant(data: IRestaurant) {
    return RestaurantModel.create(data);
  },

  async updateRestaurant(restaurantId: string, updateRestaurantObject: object) {
    const updateRestaurant = {
      _id: restaurantId,
      ...updateRestaurantObject,
    };
    const updateRes = await RestaurantModel.findByIdAndUpdate(
      { _id: restaurantId },
      updateRestaurant,
      { new: true }
    );
    return updateRes;
  },

  async requestDeleteRestaurant(restaurantId:string){
    try{
      await DishModel.findByIdAndDelete(restaurantId)
      await RestaurantModel.deleteOne({_id:restaurantId});
    }
    catch(error){
      console.log(error);
    }
  },

  async getAllDishes(restaurantId:string){
    try{
      const allDishes=await DishModel.findById({restaurant:restaurantId});
      return allDishes;
    }
    catch(error){
      console.log(error);
    } 
  },

  async getRestaurantsByChefId(chefId:string){
    try{
      const allRestaurants=await RestaurantModel.find({chef:chefId}).populate("chef");
      return allRestaurants;
    }
    catch(error){
      console.log(error);
    } 
  },

  async getRestaurantsById(restId:string){
    try{
      const res=await RestaurantModel.find({_id:restId}).populate("chef");
      return res;
    }
    catch(error){
      console.log(error);
    } 
  },

  
};

export default restaurantHandler;
