import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('world', 'Wilton24', '12345678', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3306, 
});

class Country extends Model {
  public id!: number;
  public country_code!: string;
  public country_name!: string;
}

Country.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    timestamps: false,
  }
);

(async () => {
  await sequelize.sync();
  console.log('Countries model synchronized successfully');
})();

export default Country;
