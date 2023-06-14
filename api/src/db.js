require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    // DB_DEPLOY,
    { logging: false, native: false }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
    .filter(
        (file) =>
            file.indexOf(".") !== 0 &&
            file !== basename &&
            file.slice(-3) === ".js"
    )
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));

// Capitalizamos los nombres de los modelos ie: fundacion => Fundacion
let entries = Object.entries(sequelize.models);

let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);

const { Activity, ActivityType, Children, Products, ProductsType, User } = sequelize.models;

Activity.belongsToMany(ActivityType, { through: "Activity_ActivityType" });
ActivityType.belongsToMany(Activity, { through: "Activity_ActivityType" });

Products.belongsToMany(ProductsType, { through: "Products_ProductsType" });
ProductsType.belongsToMany(Products, { through: "Products_ProductsType" });

User.belongsToMany(Activity, { through: "User_Activity" });
Activity.belongsToMany(User, { through: "User_Activity" });

User.belongsToMany(Products, { through: "User_Products" });
Products.belongsToMany(User, { through: "User_Products" });

module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
