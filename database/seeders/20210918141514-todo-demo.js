'use strict';
const faker = require('faker');
const { v4: uuid } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    const todos = Array(25).fill(0).map(() => ({
      id: uuid(),
      name: faker.fake('{{hacker.adjective}} {{hacker.noun}}'),
      status: faker.datatype.boolean(),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert(
      'Todos',
      [...todos]
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
