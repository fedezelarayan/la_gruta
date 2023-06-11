const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(Children, {
        id:{
            type:DataTypes.UUID,
            defaultvalue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        historia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            defaultValue: ""
        },
    },
    {
        timestamps: false,
    }
    )

}