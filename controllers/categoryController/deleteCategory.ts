import { RequestHandler } from "express";
import Category from "../../models/category";

const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const id = Number(req.params.id);
    await Category.destroy({
      where: {
        id: id,
      },
    });
  } catch (err) {
    return res.status(400).json(err);
  }
};

export default deleteCategory;
