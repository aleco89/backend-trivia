import { Router } from "express";
import createQuestion from "../controllers/questionController/createQuestion";
import getQuestion from "../controllers/questionController/getQuestion";

const questionRouter = Router();

questionRouter.post("/new", createQuestion);
questionRouter.get("/:id", getQuestion);

export default questionRouter;
