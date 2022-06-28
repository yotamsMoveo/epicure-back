
import chefsRouter from "./chefsRouter";
import dishesRouter from "./dishesRouter";
import restaurantsRouter from "./restaurantsRouter";
import authRouter from "./authRouter";
import singleRouter from "./singleRest";
//import express from 'express';
const mainRouter = require("express").Router();
mainRouter.use("/validation",authRouter)
mainRouter.use("/dishes", dishesRouter);
mainRouter.use("/restaurants", restaurantsRouter);
mainRouter.use("/chefs", chefsRouter);
mainRouter.use("/single", singleRouter);


export default mainRouter;