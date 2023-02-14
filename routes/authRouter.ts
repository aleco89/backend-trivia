import { Router } from "express";
import register from "../controllers/authController/register";
import login from "../controllers/authController/login";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);

export default authRouter;
