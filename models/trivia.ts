"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
  HasMany,
} from "sequelize-typescript";
import Category from "./category";
import Question from "./question";
import TriviaAnswered from "./triviaanswered";

interface TriviaAttributes {
  id: number;
  title: string;
  description: string;
  questionQuantity: number;
  CategoryId: number;
  questions?: Question[];
  triviaAnswered?: TriviaAnswered[];
}
interface TriviaCreationAttributes extends Optional<TriviaAttributes, "id"> {}

@Table
class Trivia
  extends Model<TriviaAttributes, TriviaCreationAttributes>
  implements TriviaAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  questionQuantity: number;

  @ForeignKey(() => Category)
  @Column
  CategoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Question)
  questions: Question[];
  @HasMany(() => TriviaAnswered)
  triviaAnswered: TriviaAnswered[];
}

export default Trivia;
