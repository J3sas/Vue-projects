import { Model, DataTypes } from 'sequelize';
import sequelize from '../database.config';

class Country extends Model {
  public id!: number;
  public country_code!: string;
  public country_name!: string;


  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Country.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    country_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Country',
    tableName: 'countries', // Name of your existing table
  }
);

export default Country;
