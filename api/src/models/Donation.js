const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Donation', {
        id: {
            type: DataTypes.UUID,
            default: DataTypes.UUIDV4,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}