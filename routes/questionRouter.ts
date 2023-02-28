import { Router } from "express";
import createQuestion from "../controllers/questionController/createQuestion";
import getQuestion from "../controllers/questionController/getQuestion";
import checkLogin from "../middlewares/checkLogin";
import updateQuestion from "../controllers/questionController/updateQuestion";
import checkAdmin from "../middlewares/checkAdmin";

const questionRouter = Router();

questionRouter.post("/new", checkLogin, checkAdmin, createQuestion);
questionRouter.put("/edit/:id", checkLogin, checkAdmin, updateQuestion);
questionRouter.get("/:id", checkLogin, getQuestion);

export default questionRouter;
