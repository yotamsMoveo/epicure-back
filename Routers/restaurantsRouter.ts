const restaurantsRouter = require("express").Router();
import restaurantsController from "../Controllers/restaurantsController";
import verifyToken from '../Validations/auth-check'

restaurantsRouter.get("/", restaurantsController.requestRestaurantsList);
restaurantsRouter.post("/",verifyToken, restaurantsController.requestAddRestaurant);
restaurantsRouter.patch("/:id",verifyToken, restaurantsController.requestUpdateRestaurant);
restaurantsRouter.delete("/:id",verifyToken, restaurantsController.requestDeleteRestaurant);
restaurantsRouter.get("/:id", restaurantsController.getAllDishes);


export default restaurantsRouter;