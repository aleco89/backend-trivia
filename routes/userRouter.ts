import { Router } from "express";
import getUserById from "../controllers/userController/getUserById";
import register from "../controllers/authController/register";
import checkLogin from "../middlewares/checkLogin";
import updateUser from "../controllers/userController/updateUser";

const userRouter = Router();

userRouter.put("/edit/:Id", checkLogin, updateUser);
userRouter.get("/:Id", checkLogin, getUserById);

export default userRouter;
