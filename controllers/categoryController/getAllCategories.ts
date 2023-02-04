import { RequestHandler } from "express";
import Category from "../../models/category";

const getAllCategories: RequestHandler = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json(err);
  }
};

/*
  Funcionando OK!
*/

export default getAllCategories;
