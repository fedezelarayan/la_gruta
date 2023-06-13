const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(ActivityType, {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false,
      }
    )
}