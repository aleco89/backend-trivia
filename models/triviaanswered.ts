"use strict";
import { Optional } from "sequelize";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

interface TriviaAnsweredAttributes {
  id: number;
  score: number;
  correctAnswers: number;
  incorrectAnswers: number;
  userId: number;
  triviaId: number;
}
interface TriviaCreationAttributes
  extends Optional<TriviaAnsweredAttributes, "id"> {}

@Table
class TriviaAnswered
  extends Model<TriviaAnsweredAttributes, TriviaCreationAttributes>
  implements TriviaAnsweredAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;
  @Column
  score: number;
  @Column
  correctAnswers: number;
  @Column
  incorrectAnswers: number;
  @Column
  userId: number;
  @Column
  triviaId: number;
}

export default TriviaAnswered;
