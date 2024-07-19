import { QueryInterface } from 'sequelize';
import { User } from '../models/User'; // Import the User model and UserAttributes

const usersData = [
  {
    email: 'apaps@topspin.com',
    password: 'password1',
    name: 'Retxed Bucks'
  },
  {
    email: 'nonong@topspin.com',
    password: 'katawa',
    name: 'Pards Nonong'
  },
  // Add more users as needed
];

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await User.bulkCreate(usersData);
  },

  down: async (queryInterface: QueryInterface) => {
    await User.destroy({ where: {} });
  }
};
