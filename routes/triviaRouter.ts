import { Router } from "express";
import getAllTrivias from "../controllers/trviaController/getAllTrivia";
import createTrivia from "../controllers/trviaController/createTrivia";
import deleteTrivia from "../controllers/trviaController/deleteTrivia";
import updateTrivia from "../controllers/trviaController/updateTrivia";

const triviaRouter = Router();

triviaRouter.post("/new", createTrivia);
triviaRouter.post("/edit/:id", updateTrivia);
triviaRouter.delete("/:id", deleteTrivia);
triviaRouter.get("/", getAllTrivias);

export default triviaRouter;
