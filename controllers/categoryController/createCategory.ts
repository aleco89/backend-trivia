import { RequestHandler } from "express";
import Category from "../../models/category";
import CategoryCreationAttributes from "../../models/category";

const createCategory: RequestHandler = async (req, res) => {
  try {
    const categoryAttributes = req.body as CategoryCreationAttributes;
    const category = await Category.findOrCreate({
      where: { name: categoryAttributes.name },
    });
    return res.status(201).json(category);
  } catch (err) {
    return res.status(400).json(err);
  }
};
/*
  Funcionando OK!
*/

export default createCategory;
