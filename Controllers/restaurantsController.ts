import { Request, Response } from "express";
import restaurantsHandler from "../Handlers/restaurantsHandler";

const restaurantsController = {
  async requestRestaurantsList(req: Request, res: Response) {
    try {
      const result = await restaurantsHandler.getRestaurantsList();
      res.status(200).json({
        status: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async requestAddRestaurant(req: Request, res: Response) {
    try {
      const result = await restaurantsHandler.postRestaurant(req.body);
      res.status(200).json({
        status: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async requestUpdateRestaurant(req: Request, res: Response) {
    try {
      const result = await restaurantsHandler.updateRestaurant(
        req.params.id,
        req.body
      );
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async requestDeleteRestaurant(req: Request, res: Response) {
    try {
      const result = await restaurantsHandler.requestDeleteRestaurant(
        req.params.id
      );
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async getAllDishes(req:Request,res:Response){
    try {
      const result = await restaurantsHandler.getAllDishes(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  }
};
export default restaurantsController;
