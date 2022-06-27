const authRouter = require("express").Router();
import userController from '../Controllers/authController';
import userValidation from '../Validations/userValidation'

authRouter.post("/register",userValidation.varifyRegister, userController.register);
authRouter.post("/login",userValidation.varifyLogin, userController.login);
authRouter.get("/", userController.getAllUsers);


export default authRouter;