import { RequestHandler } from "express";
import jwt from "jsonwebtoken";

const checkLogin: RequestHandler = (req, res) => {
  const decoded = jwt.verify();
};

export default checkLogin;
