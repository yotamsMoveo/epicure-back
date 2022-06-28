import { Request, Response } from "express";
import dishesHandler from "../Handlers/dishesHandler";

const dishesController = {
  async requestDishesList(req: Request, res: Response) {
    try {
      const result = await dishesHandler.getDishesList();
      res.status(200).json({
        status: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async requestAddDish(req: Request, res: Response) {
    try {
      const result = await dishesHandler.postDish(req.body);
      res.status(200).json({
        status: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async requestUpdateDish(req: Request, res: Response) {
    try {
      const result = await dishesHandler.updateDish(req.params.id, req.body);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async requestDeleteDish(req:Request,res:Response){
    try {
      const result = await dishesHandler.requestDeleteDish(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  async getDishesByRestId(req:Request,res:Response){
    try {
      const result = await dishesHandler.getDishesByRestId(req.params.id);
      res.status(200).json({
        statuse: "Success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  
};
export default dishesController;
