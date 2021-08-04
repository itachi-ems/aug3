'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class repo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user}) {
      // define association here
        this.belongsTo(user,{foreignKey:'userId'});
    }
  };
  repo.init({
    repoId: {type:DataTypes.INTEGER,allowNull:false,
      primaryKey:true,
      unique:true,
      autoIncrement: true,},
      email: {type:DataTypes.STRING,allowNull:false,
        validate: {
        notEmpty: true,
        notIn: [["Demo", "Trial"]],
        
      }},
    repoName: {type:DataTypes.STRING,allowNull:false,
      validate: {
      notEmpty: true,
      notIn: [["Demo", "Trial"]],
      
    }},
  }, {
    sequelize,
    tableName:'repo',
    modelName: 'repo',
  });
  return repo;
};