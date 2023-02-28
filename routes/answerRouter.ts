import { Router } from "express";
import checkAnswer from "../controllers/answerController/createUsersAnswers";
import checkLogin from "../middlewares/checkLogin";
import createUsersAnswers from "../controllers/answerController/createUsersAnswers";

const answerRouter = Router();

answerRouter.post("/new", checkLogin, createUsersAnswers);

export default answerRouter;
