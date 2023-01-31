import { Router } from "express";
import createUser from "../controllers/userController/createUser";
import getUserById from "../controllers/userController/getUserById";

const userRouter = Router();

userRouter.use("/new", createUser);
userRouter.use("/:Id", getUserById);

export default userRouter;
