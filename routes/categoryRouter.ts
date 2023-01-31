import { Router } from "express";
import createCategory from "../controllers/categoryController/createCategory";
import getAllCategories from "../controllers/categoryController/getAllCategories";
import getCategoryById from "../controllers/categoryController/getCategoryById";

const categoryRouter = Router();

categoryRouter.use("/new", createCategory);
categoryRouter.use("/getAll", getAllCategories);
categoryRouter.use("/getById", getCategoryById);

export default categoryRouter;
