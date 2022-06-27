import dishesRouter from "../Routers/dishesRouter";
import DishModel from "../Schemes/DishSchema";
import DishesModel from "../Schemes/DishSchema";

const chefHandler = {
  async getDishesList() {
    return DishesModel.find({ active: true }).populate("restaurant");
  },

  async postDish(data: any) {
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
 
};

export default chefHandler;
