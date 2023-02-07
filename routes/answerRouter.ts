import { Router } from "express";
import checkAnswer from "../controllers/answerController/checkAnswer";

const answerRouter = Router();

answerRouter.use("/:id", checkAnswer);

export default answerRouter;
