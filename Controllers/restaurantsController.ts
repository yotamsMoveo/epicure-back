import { Request, Response } from "express";
import restaurantHandler from "../Handlers/restaurantsHandler";
import restaurantsHandler from "../Handlers/restaurantsHandler";

const restaurantsController = {
  async requestRestaurantsList(req: Request, res: Response) {
    console.log("yotam the king");
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

  async getAllDishes(req: Request, res: Response) {
    try {
      const result = await restaurantsHandler.getAllDishes(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async getRestaurantsByChefId(req: Request, res: Response) {
    try {
      const result = await restaurantHandler.getRestaurantsByChefId(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  async getRestaurantsById(req: Request, res: Response) {
    try {
      const result = await restaurantHandler.getRestaurantsById(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  
};
export default restaurantsController;
