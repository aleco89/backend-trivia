import { Router } from "express";
import createQuestion from "../controllers/questionController/createQuestion";
import getQuestion from "../controllers/questionController/getQuestion";

const questionRouter = Router();

questionRouter.use("/new", createQuestion);
questionRouter.use("/:id", getQuestion);
//questionRouter.use("/:id", getQuestionByTriviaId);

export default questionRouter;
