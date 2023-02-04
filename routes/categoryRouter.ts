import { Router } from "express";
import createCategory from "../controllers/categoryController/createCategory";
import getAllCategories from "../controllers/categoryController/getAllCategories";
import getCategoryById from "../controllers/categoryController/getCategoryById";
import deleteCategory from "../controllers/categoryController/deleteCategory";

const categoryRouter = Router();

categoryRouter.use("/new", createCategory);
categoryRouter.use("/", getAllCategories);
categoryRouter.use("/:id", getCategoryById, deleteCategory);

export default categoryRouter;
