"use strict";
import { Optional } from "sequelize";
import { Table, Column, Model, PrimaryKey } from "sequelize-typescript";

interface CategoryAttributes {
  id: number;
  name: string;
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
}

export default Category;
