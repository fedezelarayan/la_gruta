const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    
    sequelize.define('Cart_Products', {
        quantity: DataTypes.INTEGER,
    })
}