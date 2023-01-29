"use strict";
import { Optional } from "sequelize";
import {
  Table,
  Column,
  Model,
  PrimaryKey,
  HasMany,
} from "sequelize-typescript";
import Trivia from "./trivia";

interface CategoryAttributes {
  id: number;
  name: string;
  trivias?: Trivia[];
}
interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

@Table
class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  @PrimaryKey
  @Column({
    allowNull: false,
    autoIncrement: true,
  })
  id: number;
  @Column
  name: string;

  @HasMany(() => Trivia)
  trivias: Trivia[];
}

export default Category;
