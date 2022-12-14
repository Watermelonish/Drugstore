'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {
        through: models.userDrug,
        foreignKey: 'item_id',
        otherKey: 'user_id'
      })
      this.belongsToMany(models.User, {
        through: models.Story,
        foreignKey: 'item_id',
        otherKey: 'user_id'
      })
      this.hasMany(models.Story, {foreignKey:"item_id"})

    }
  }
  Drug.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discountPrice: DataTypes.INTEGER,
    discount: DataTypes.BOOLEAN,
    free: DataTypes.BOOLEAN,
    image: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drug',
  });
  return Drug;
};