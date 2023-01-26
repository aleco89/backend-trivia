"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
import Category from "./category";

interface TriviaAttributes {
  id: number;
  title: string;
  description: string;
  questionQuantity: number;
  CategoryId: number;
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
}

export default Trivia;
