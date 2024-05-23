import { Sequelize } from 'sequelize';
const sequelize = new Sequelize({
    dialect: 'mariadb',
    host: 'localhost',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});
export default sequelize;
// import { Sequelize } from 'sequelize-typescript';
// const sequelize = new Sequelize({
//   database: process.env.PORT,
//   dialect: 'mariadb',
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST,
//   port: Number(process.env.DB_PORT),
//   models: [__dirname + '/models']
// })
// export default sequelize;
