import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('world', 'Wilton24', '12345678', {
  host: 'localhost',
  dialect: 'mariadb',
  port: 3306,
});

const Countries = sequelize.define();