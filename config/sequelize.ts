import { Sequelize, SequelizeOptions } from "sequelize-typescript";
import User from "../models/user";
import config from "./config.json";

const local = config.local;

const sequelize = new Sequelize(
  local.database,
  local.username,
  local.password,
  {
    host: local.host,
    dialect: local.dialect as "mysql",
    port: local.port,
    models: [User],
  } as SequelizeOptions
);

export default sequelize;
