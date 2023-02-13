import { Router } from "express";
import checkAnswer from "../controllers/answerController/createUsersAnswers";

const answerRouter = Router();

answerRouter.use("/:id", checkAnswer);

export default answerRouter;
