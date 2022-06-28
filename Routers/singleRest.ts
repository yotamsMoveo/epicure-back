const singleRouter = require("express").Router();
import restaurantsController from "../Controllers/restaurantsController";
import verifyToken from '../Validations/auth-check'

singleRouter.get("/:id", restaurantsController.getRestaurantsById);





export default singleRouter;