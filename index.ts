import express from "express";
import cors from "cors";
import sequelize from "./config/sequelize";
import appRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", appRouter);

app.listen(3000, async () => {
  console.log("DB connected and app listen");
});
