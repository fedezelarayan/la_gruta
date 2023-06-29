const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {

    sequelize.define('User', {
        id:{
            type:DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull: false,
        },
         username: {

        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: true,
        },
        birthDate: {
            type: DataTypes.STRING,
            // defaultValue: 0,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: "",
            isUrl: {
                msg: "La imagen debe ser una URL"
            }
        },
        phone:{
            type: DataTypes.STRING,
            defaultValue: 0,
        },
        mail:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            isEmail: {
                msg: "Debe ingresar un email válido"
            }
        },
        occupation: {
            type: DataTypes.STRING,
            
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 12345678,
            isAlphanumeric: {
                msg: "La contraseña debe ser alfanumérica"
            }, //Chequea que sea alfanumerico
            // len: {
            //     arg: [[6, 14]],
            //     msg: "La contraseña debe tener entre 6 y 14 caracteres"
            // }, //longitud de la contraseña


        },
        status:{
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
    },
    {
        paranoid: true,
    }
    );
}