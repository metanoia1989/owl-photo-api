const { Sequelize } = require('sequelize')

const {
  DATABASE_NAME: database,
  DATABASE_USER: username,
  DATABASE_PASSWORD: password,
  DATABASE_PREFIX: prefix,
  DATABASE_HOST: host,
  DATABASE_PORT: port,
  DATABASE_CHARSET: charset,
} = process.env

var db = new Sequelize(database, username, password, {
  host, port, dialect: 'mysql',
  define: {
    schema: prefix,
    schemaDelimiter: '_',
    charset: charset,
  }
})

module.exports = db;
