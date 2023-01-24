import { Sequelize, SequelizeOptions } from "sequelize-typescript";
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
    models: [],
  } as SequelizeOptions
);

export default sequelize;
