const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('Activity', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            isUrl: {
                msg: "La imagen debe tener formato URL"
            },
        description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
    },
        {
            paranoid: true,
        }
    );
};