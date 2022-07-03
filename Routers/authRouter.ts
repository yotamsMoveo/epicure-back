const authRouter = require("express").Router();
import userController from '../Controllers/authController';
import userValidation from '../Validations/userValidation'

authRouter.post("/register", userController.register);
authRouter.post("/login", userController.login);
authRouter.get("/", userController.getAllUsers);


export default authRouter;