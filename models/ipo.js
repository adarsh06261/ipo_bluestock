'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IPO extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  IPO.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    openDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'IPO',
  });
  return IPO;
};