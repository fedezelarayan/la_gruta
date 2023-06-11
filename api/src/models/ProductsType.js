const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(Products, {
        id: {
            type: DataTypes.UUID,
            defaultvalue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false,
    }
    )
}