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
import TriviaAnswered from "./triviasanswered";
import CategroyCreationAttributes from "./triviasanswered";

interface TriviaAttributes {
  id: number;
  title: string;
  description: string;
  questionQuantity: number;
  categoryId: number;
  category?: CategroyCreationAttributes;
  questions?: Question[];
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
  categoryId: number;
  @BelongsTo(() => Category)
  categ: Category;

  @HasMany(() => Question)
  questions: Question[];
  @HasMany(() => TriviaAnswered)
  triviaAnswered: TriviaAnswered[];
}

export default Trivia;
