//const chefsRouter = require("express").Router();
import { Router }  from 'express'
import chefsController from "../Controllers/chefsController";
import verifyToken from '../Validations/auth-check';

const chefsRouter = Router();
chefsRouter.get("/", chefsController.requestChefsList);
chefsRouter.post("/",verifyToken, chefsController.requestAddChef);
chefsRouter.patch("/:id",verifyToken, chefsController.updateChef);
chefsRouter.delete("/:id",verifyToken, chefsController.deleteChef);


export default chefsRouter;
