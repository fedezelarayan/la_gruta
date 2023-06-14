const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('Children', {
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            min: 1,
        },
        history: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: ""
        },
    },
    {
        timestamps: false,
    }
    )

}