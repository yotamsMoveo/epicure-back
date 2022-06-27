const chefsRouter = require("express").Router();
import chefsController from "../Controllers/chefsController";
import verifyToken from '../Validations/auth-check';


chefsRouter.get("/", chefsController.requestChefsList);
chefsRouter.post("/",verifyToken, chefsController.requestAddChef);
chefsRouter.patch("/:id",verifyToken, chefsController.updateChef);
chefsRouter.get("/:id", chefsController.getAllRestaurants);
chefsRouter.delete("/:id",verifyToken, chefsController.deleteChef);


export default chefsRouter;
