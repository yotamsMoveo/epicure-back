const dishesRouter = require("express").Router();
import dishesController from "../Controllers/dishesController";
import verifyToken from '../Validations/auth-check'

dishesRouter.get("/", dishesController.requestDishesList);
dishesRouter.post("/",verifyToken, dishesController.requestAddDish);
dishesRouter.patch("/:id",verifyToken, dishesController.requestUpdateDish);
dishesRouter.delete("/:id",verifyToken, dishesController.requestDeleteDish);

export default dishesRouter;