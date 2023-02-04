import { Router } from "express";
import userRouter from "./userRouter";
import triviaRouter from "./triviaRouter";
import categoryRouter from "./categoryRouter";
import questionRouter from "./questionRouter";

const appRouter = Router();

//todos los routers de cada entidad:
appRouter.use("/user", userRouter);
appRouter.use("/trivia", triviaRouter);
appRouter.use("/category", categoryRouter);
appRouter.use("/question", questionRouter);

export default appRouter;
