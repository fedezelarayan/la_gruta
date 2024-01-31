const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('Review', {
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1, // Puntuación mínima permitida
                max: 5  // Puntuación máxima permitida
              }
        }
    },
        {
            timestamps: true
        }
    );
}

