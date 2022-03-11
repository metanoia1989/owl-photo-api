const { DataTypes, Op } = require('sequelize')
const db = require('./db')

/**
 * 微博表
 */
const Posts = db.define('Posts', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  uid: {
    type: DataTypes.INTEGER,
  },
  content: {
    type: DataTypes.STRING,
  },
  imgs: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'posts',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
})


module.exports = Posts
