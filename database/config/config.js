module.exports = {
  "development": {
    "username": null,
    "password": null,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": process.env.DB_DIALECT
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
