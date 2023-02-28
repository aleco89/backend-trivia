import { Router } from "express";
import createTrivia from "../controllers/trviaController/createTrivia";
import deleteTrivia from "../controllers/trviaController/deleteTrivia";
import getAllTrivias from "../controllers/trviaController/getAllTrivia";
import updateTrivia from "../controllers/trviaController/updateTrivia";
import checkLogin from "../middlewares/checkLogin";
import checkAdmin from "../middlewares/checkAdmin";
import endTrivia from "../controllers/trviaController/endTrivia";

const triviaRouter = Router();

triviaRouter.post("/new", checkLogin, checkAdmin, createTrivia);
triviaRouter.put("/edit/:id", checkLogin, checkAdmin, updateTrivia);
triviaRouter.delete("/:id", checkLogin, checkAdmin, deleteTrivia);
triviaRouter.post("/end/:id", checkLogin, endTrivia);
triviaRouter.get("/", checkLogin, getAllTrivias);

export default triviaRouter;
