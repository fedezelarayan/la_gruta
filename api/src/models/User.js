const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define(User, {
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
        lastname:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dni:{
                type: DataTypes.INTEGER,
                defaultValue: 0,
        },
        age: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: ""
        },
        phone:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        password:{
            type: DataTypes.INTEGER,
            defaultValue: 12345678,
        },
        volunteer:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        sponsor:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    },
    {
        timestamps: false,
    }
    );
}