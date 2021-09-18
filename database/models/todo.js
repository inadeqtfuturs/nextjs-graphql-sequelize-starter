const { v4: uuid } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN
    },
    {
      hooks: {
        beforeCreate: async (todo) => {
          if (!todo.id) {
            todo.id = uuid();
          }
        }
      }
    }
  );

  return Todo;
}
