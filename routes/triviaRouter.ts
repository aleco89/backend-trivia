import { Router } from "express";
import getAllTrivias from "../controllers/trviaController/getAllTrivia";
import createTrivia from "../controllers/trviaController/createTrivia";
import getTriviaById from "../controllers/trviaController/getTriviaById";

const triviaRouter = Router();

triviaRouter.use("/", getAllTrivias);
triviaRouter.use("/new", createTrivia);
//triviaRouter.use("/:id", getTriviaById);

export default triviaRouter;
