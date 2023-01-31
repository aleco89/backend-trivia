import { Router } from "express";
import createCategory from "../controllers/categoryController/createCategory";
import getAllCategories from "../controllers/categoryController/getAllCategories";
import getCategoryById from "../controllers/categoryController/getCategoryById";

const categoryRouter = Router();

categoryRouter.use("/", createCategory);
categoryRouter.use("/", getAllCategories);
categoryRouter.use("/:Id", getCategoryById);

export default categoryRouter;
