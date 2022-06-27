import { Request, Response } from "express";
import chefHandler from "../Handlers/chefHandler";

const chefsController = {
  async requestChefsList(req: Request, res: Response) {
    try {
      const result = await chefHandler.getChefsList();
      res.status(200).json({
        status: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async requestAddChef(req: Request, res: Response) {
    try {
      const result = await chefHandler.postChef(req.body);
      res.status(200).json({
        status: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async updateChef(req: Request, res: Response) {
    try {
      const result = await chefHandler.updateChef(req.params.id, req.body);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async getAllRestaurants(req: Request, res: Response) {
    try {
      const result = await chefHandler.getAllRestaurants(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async deleteChef(req: Request, res: Response){
    try {
      const result = await chefHandler.deleteChef(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  } 
};
export default chefsController;
