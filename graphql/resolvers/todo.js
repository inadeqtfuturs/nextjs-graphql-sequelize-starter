const sequelize = require('sequelize');
const { Todo } = require('@database/models');

module.exports = {
  Query: {
    async todos(root, { input }) {
      return Todo.findAll({ where: { ...input }});
    },

    async todo(root, { id }) {
      return Todo.findOne({ where: { id } })
    }
  },

  Mutation: {
    async createTodo(root, { name }) {
      return Todo.create({ name });
    },

    async updateTodo(root, { id, ...args }) {
      return Todo.update(args, { where: { id }, returning: true })
        .then(([, [result]]) => result);
    },

    async deleteTodo(root, { id }) {
      return Todo.destroy({ where: { id } })
        .then((rows) => rows && ({ id }));
    }
  }
}