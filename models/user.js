'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({repo}) {
      // define association here
      this.hasMany(repo,{foreignKey:'email'});
    }
  };
  user.init({
    userId:{type:DataTypes.INTEGER,allowNull:false,
      primaryKey:true,
      unique:true,
      autoIncrement: true,},
    email: {type:DataTypes.STRING,allowNull:false,
      validate: {
      notEmpty: true,
      notIn: [["Demo", "Trial"]],
      
    }},
    password: {type:DataTypes.STRING,allowNull:false,
      len: {
        args: [1, 10],
        msg: "Password must be between 2 to 16", //custom message
      },}
  }, {
    sequelize,
    tableName:'user_table',
    modelName: 'user',
  });
  return user;
};