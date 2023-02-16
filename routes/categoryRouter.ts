import { Router } from "express";
import createCategory from "../controllers/categoryController/createCategory";
import getAllCategories from "../controllers/categoryController/getAllCategories";
import getCategoryById from "../controllers/categoryController/getCategoryById";
import deleteCategory from "../controllers/categoryController/deleteCategory";

const categoryRouter = Router();

categoryRouter.post("/new", createCategory);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.get("/", getAllCategories);

export default categoryRouter;
