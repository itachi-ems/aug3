'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    id : {
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
    },
    email: {
      type :DataTypes.STRING,
      allowNull:false}, 
    password:{
      type: DataTypes.STRING,
      allowNull: false
    } 
  }, {
    sequelize,
    tableName: 'user_table',
    modelName: 'user',
  });
  return user;
};