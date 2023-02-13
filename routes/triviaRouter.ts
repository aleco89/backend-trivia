import { Router } from "express";
import getAllTrivias from "../controllers/trviaController/getAllTrivia";
import createTrivia from "../controllers/trviaController/createTrivia";
import deleteTrivia from "../controllers/trviaController/deleteTrivia";

const triviaRouter = Router();

triviaRouter.use("/new", createTrivia);
triviaRouter.use("/:id", deleteTrivia);
triviaRouter.use("/", getAllTrivias);

export default triviaRouter;
