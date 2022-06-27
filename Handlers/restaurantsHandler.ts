import chefsRouter from "../Routers/chefsRouter";
import DishModel from "../Schemes/DishSchema";
import RestaurantModel from "../Schemes/RestaurantSchema";

const restaurantHandler = {
  async getRestaurantsList() {
    return RestaurantModel.find({ active: true });
  },

  async postRestaurant(data: any) {
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
  }
};

export default restaurantHandler;
