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
    return res.status(204).json({ message: "category deleted" });
  } catch (err) {
    return res.status(400).json(err);
  }
};
/*
no funciona
*/

export default deleteCategory;
