import DishModel, { IDish } from "../Schemes/DishSchema";
import DishesModel from "../Schemes/DishSchema";

const dishesHandler = {
  async getDishesList() {
    return DishesModel.find({ active: true }).populate("restaurant");
  },

  async postDish(data: IDish) {
    return DishesModel.create(data);
  },

  async updateDish(dishId: string, updatedDishObject:object) {
    const updateDish = {
      _id: dishId,
      ...updatedDishObject,
    };
    const updateResponse = await DishModel.findByIdAndUpdate(
      { _id: dishId },
      updateDish,
      { new: true }
    );
    return updateResponse;
  },

  async requestDeleteDish(dishId:string){
    const dishToDelete=await DishModel.deleteOne({_id:dishId});
  }
,
  async getDishesByRestId(restId:string){
    const dishes=await DishModel.find({restaurant:restId});
    return dishes
  }
 
};

export default dishesHandler;
