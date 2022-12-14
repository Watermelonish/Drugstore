'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Drug, {
        through: models.userDrug,
        foreignKey: 'user_id',
        otherKey: 'item_id'
      })
      this.belongsToMany(models.Story, {
        through: models.userDrug,
        foreignKey: 'user_id',
        otherKey: 'item_id'
      })
    }
  
  }
  User.init({
    mail: DataTypes.STRING,
    login: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};