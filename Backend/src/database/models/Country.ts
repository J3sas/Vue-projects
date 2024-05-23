import { DataTypes, Model} from 'sequelize';
import sequelize from '../connection.js'

interface UserAttributes {
  id: number;
  country_code: string;
  country_name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Country extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public country_code!: string;
  public country_name!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Country.init({
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  country_code: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize, 
  tableName: 'country', 
});

export default Country