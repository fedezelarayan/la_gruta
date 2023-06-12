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
            allowNull: false,
        },
        birthDate: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "",
            isUrl: {
                msg: "La imagen debe ser una URL"
            }
        },
        phone:{
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: {
                msg: "Debe ingresar un email válido"
            }
        },
        admin:{
            type: DataTypes.BOOLEAN, 
            allowNull: false,
            defaultValue: false,
        },
        password:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 12345678,
            isAlphanumeric: {
                msg: "La contraseña debe ser alfanumérica"
            }, //Chequea que sea alfanumerico
            len: {
                arg: [[6, 14]],
                msg: "La contraseña debe tener entre 6 y 14 caracteres"
            }, //longitud de la contraseña


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