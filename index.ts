import express from "express";
import trivia from "./models/trivia";

const app = express();

app.use(express.json());

type Trivia = {
  id: number;
  title: string;
  description: string;
  questionQuantity: number;
  CategoryId: number;
};
/*
app.get("/home", async (req, res) => {
    const trivias:Trivia = await trivia.findAndCountAll({
        res.status(200).json(trivias);
    })
});

app.get //validacion pregunta

//post crear trivia

*/

app.listen(3000);
