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

interface TriviaAttributes {
  id: number;
  title: string;
  description: string;
  questionQuantity?: number;
  categoryId: number;
  published: boolean;
  questions?: Question[];
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

  @Column({
    allowNull: false,
  })
  published: boolean;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;
  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Question, { onDelete: "cascade" })
  questions: Question[];
}

export default Trivia;
