import { Router } from "express";
import userRouter from "./userRouter";

const appRouter = Router();

//todos los routers de cada entidad:
appRouter.use("./userRouter", userRouter);

export default appRouter;
