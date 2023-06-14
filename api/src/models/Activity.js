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
        class_activity: { //Que sería class_activity? Si es el tipo de actividad no deberia estar en este modelo, se generaría solo en la tabla intermedia
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
            }
        },
        description: {
            allowNull: false,
            type: DataTypes.TEXT,        
        }

    },
        {
            timestamps: false,
        }
    );
};