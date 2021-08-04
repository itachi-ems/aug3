'use strict';

// const { DataTypes } = require("sequelize/types");

module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('repo', {
      repoId: {
        type: DataTypes.INTEGER
      },
      email: {type:DataTypes.STRING,allowNull:false,
        validate: {
        notEmpty: true,
        notIn: [["Demo", "Trial"]],
        
      }},
      
      repoName: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('repo');
  }
};