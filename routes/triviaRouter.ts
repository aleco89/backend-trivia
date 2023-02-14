import { Router } from "express";
import createTrivia from "../controllers/trviaController/createTrivia";
import getAllTrivias from "../controllers/trviaController/getAllTrivia";
import getTriviaById from "../controllers/trviaController/getTriviaById";

const triviaRouter = Router();

triviaRouter.use("/new", createTrivia);
triviaRouter.use("/", getAllTrivias);
//triviaRouter.use("/:id", getTriviaById);

export default triviaRouter;
