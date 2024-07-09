// ./seeders/20240710120000-demo-users.ts

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
    // Insert users into the database
    await User.bulkCreate(usersData);
  },

  down: async (queryInterface: QueryInterface) => {
    // Remove all users from the database
    await User.destroy({ where: {} });
  }
};
