import { Router } from "express";
import checkAnswer from "../controllers/usersAnswersController/checkAnswer";

const answerRouter = Router();

answerRouter.use("/:id", checkAnswer);

export default answerRouter;
