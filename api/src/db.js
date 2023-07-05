require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const {/*  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, */ DB_DEPLOY } = process.env;

const sequelize = new Sequelize( 
    // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
     DB_DEPLOY,
    { 
        logging: false, 
        native: false,
        dialectOptions: {
            ssl: {
                    require: true,
            }
        }
    }
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

const { Activity, ActivityType, Children, Products, ProductsType, User, Rol, Cart, Cart_Products, Donation, Review } = sequelize.models;

Activity.belongsToMany(ActivityType, { through: "Activity_ActivityType" });
ActivityType.belongsToMany(Activity, { through: "Activity_ActivityType" });

Products.belongsToMany(ProductsType, { through: "Products_ProductsType" });
ProductsType.belongsToMany(Products, { through: "Products_ProductsType" });

User.belongsToMany(Activity, { through: "User_Activity" });
Activity.belongsToMany(User, { through: "User_Activity" });

User.belongsToMany(Products, { through: "User_Products" });
Products.belongsToMany(User, { through: "User_Products" });

/* const Roles = sequelize.define("Roles"); */

User.belongsToMany(Rol, { through: "User_Roles" });
Rol.belongsToMany(User, { through: "User_Roles"});

User.hasOne(Cart);
Cart.belongsTo(User);

Products.belongsToMany(Cart, { through: Cart_Products});
Cart.belongsToMany(Products, { through: Cart_Products});

User.hasMany(Donation);
Donation.belongsTo(User);

Products.hasMany(Review, {foreignKey: "product_id"}); 
Review.belongsTo(Products, {foreignKey: "product_id"});

User.hasMany(Review, {foreignKey: "user_id"}); 
Review.belongsTo(User, {foreignKey: "user_id"});


module.exports = {
    ...sequelize.models,
    Cart,
    conn: sequelize,
};
