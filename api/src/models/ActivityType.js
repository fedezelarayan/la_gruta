const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(ActivityTipe, {
        id: {
            type: DataTypes.UUID,
            defaultvalue: DataTypes.UUIDV4,
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