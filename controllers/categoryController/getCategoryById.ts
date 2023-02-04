import { RequestHandler } from "express";
import Category from "../../models/category";

const getCategoryById: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    const category = await Category.findByPk(id);
    if (category === null) {
      res.status(400).json({ message: "category does not exists" });
    } else {
      return res.status(200).json(category);
    }
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default getCategoryById;
