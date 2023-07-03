const { Console } = require('console');
const { Products, ProductsType, Review } = require('../db');
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

const API_KEY = process.env.API_KEY;
const API_SECRET = process.env.API_SECRET;
const CLOUD_NAME = process.env.CLOUD_NAME;
const ASSET_PATH_PRODUCTS = process.env.ASSET_PATH_PRODUCTS;

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET,
})


const getAllProducts = async () => {

    const dbProducts = await Products.findAll({
        include: [{
            model: ProductsType,
            attributes: ['name'],
            through: { attributes: [] }
        },            
        {
            model: Review,
            attributes: ['content', 'rating', 'user_id'],
        }]
    });
    return dbProducts;
}

const postProducts = async (name, price, image, description, stock, type) => {
    const imgPath = ASSET_PATH_PRODUCTS;

    const files = await fs.promises.readdir(imgPath);
    for (const file of files) {
        const imageFullPath = imgPath + file;
        console.log(imageFullPath);

        try {
            const result = await cloudinary.uploader.upload(imageFullPath, { public_id: `image_${uuidv4()}` });
            const imgLink = result.secure_url;
            await fs.promises.unlink(imageFullPath);
            image = imgLink;
        } catch (error) {
            throw new Error('Error al subir la imagen a Cloudinary');
        }

        if (!name) {
            throw new Error("No puedes enviar un nombre vacío")
        };

        const existingProduct = await Products.findOne({ where: { name } })

        if (existingProduct) {
            throw new Error("El producto existe");
        } else {
            const newProducts = await Products.create({ name, price, image, description, stock, type }) 
            newProducts.addProductsType(type)
            return newProducts;
        }
    }
};
/* {
    "name" : "camisetita", 
    "price": 150, 
    "img" : "", 
    "description" : "haethethbethet", 
    "stock" : "10", 
    "type" : "2"
} */

const getDetailProducts = async (id) => {
    const products = await Products.findByPk(id, {
        include: [
            {
                model: ProductsType,
                attributes: ['name'],
                through: { attributes: [] }
            },
            {
                model: Review,
                attributes: ['content', 'rating', 'user_id'],
            }
        ]
    })
    return products;
}

const deleteProduct = async (id) => {
    const deletProduct = await Products.findByPk(id)
    const deletedProduct = await deletProduct.destroy();
    return deletedProduct;
}

const restoreProductos = async (id) => {
    const resProduc = await Products.findByPk(id, { paranoid: false })
    if (!resProduc) {
        throw new Error("Producto no encontrado")
    }
    resProduc.restore();
    return resProduc;
}

module.exports = {
    getAllProducts,
    postProducts,
    getDetailProducts,
    deleteProduct,
    restoreProductos,
    /*   putStatusProducts,
       updateProducts,
       getFilterAdminProducts,
       getAllAdminProducts */
}