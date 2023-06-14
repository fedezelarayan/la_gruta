const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('Products', {
        id: {
            type: DataTypes.UUID,
            defaultvalue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            min: 1,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "",
            isUrl: {
                msg: "La foto debe tener formato de URL"
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }

    },
        {
            timestamps: false,
        }
    );
}