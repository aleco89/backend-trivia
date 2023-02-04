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

interface TriviaAttributes {
  id: number;
  title: string;
  description: string;
  questionQuantity: number;
  categoryId: number;
  questions?: Question[];
  triviasAnswered?: TriviaAnswered[];
}
interface TriviaCreationAttributes extends Optional<TriviaAttributes, "id"> {}

@Table({
  tableName: "trivias",
})
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

  @Column({
    allowNull: false,
  })
  title: string;

  @Column
  description: string;

  @Column({
    allowNull: false,
  })
  questionQuantity: number;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Question)
  questions: Question[];
  @HasMany(() => TriviaAnswered)
  triviasAnswered: TriviaAnswered[];
}

export default Trivia;
