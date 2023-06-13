const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(Activity, {
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
        class_activity: { //Que sería class_activity? Si es el tipo de actividad no deberia estar en este modelo, se generaría solo en la tabla intermedia
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        img: {
            allowNull: false,
            isUrl: {
                msg: "La imagen debe tener formato URL"
            }
        }
    },
        {
            timestamps: false,
        }
    );
};