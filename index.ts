import express from "express";
import cors from "cors";
import sequelize from "./config/sequelize";
import appRouter from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", appRouter);
/*
app.get("/home", async (req, res) => {
    const trivias:Trivia = await trivia.findAndCountAll({
        res.status(200).json(trivias);
    })
});

app.get //validacion pregunta

//post crear trivia

*/

app.listen(3000, async () => {
  await sequelize.authenticate();
  await sequelize.sync({ force: true });
  console.log("DB connected and app listen");
});
