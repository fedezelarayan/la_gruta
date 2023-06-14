/* const { 
    getAllProducts, ya
    getDetailProducts, ya
    postProducts, ya
    putStatusProducts, ya
    updateProducts, 
    getFilterAdminProducts, ya
    getAllAdminProducts ya
} = require ('../controllers/productsControllers'); */

const getAllProductsHandler = async (req, res) => {
    try {
        /* const allProducts = await getAllProducts();
        res.status(200).json(allProducts); */ 
        res.status(200).json("aqui traeriamos todas los productos"); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getDetailProductsHandler = async (req, res) => {
    try {
/*         const detailProducts = await getDetailProducts ()
        res.status(200).json(detailProducts); */
        res.status(200).json ("aqui traeriamos el detalle de cada producto") 

    } catch (error) {
        res.status(400).json ({ error: error.message })
    }
};
const postProductsHandler = async (req, res) => {
/*     const {id, name, price, image, description, stock, type} = req.body */
try {
    /* const newProduct = await postProducts (id, name, price, image, description, stock, type) */
    res.status(200).json(/* newProduct */"aqui creariamos un producto")
} catch (error) {
    res.status(400).json({ error: error.message })   
}
}

const getFilterSuperAdminProductsHandler = async (req, res) => {
    try {
/*         const productStatus = await getFilterAdminProducts(); 
           res.status(200).json(productStatus);*/
           res.status(200).json("esta url es para que el admin vea el estado de los productos")
    } catch (error) {
            res.status(400).json({ error: error.message })
    }
}

const getAllProductsAdminHandler = async (req, res) => {
    try {
        /* const allProductsAdmin = await getAllAdminProducts();
        res.status(200).json(allProductsAdmin) */
        res.status(200).json("aqui el admin veria todos los productos")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const putStatusProductsHandler = async (req, res) => {
    try {
/*         const putStatusProduct = await putStatusProducts();
        res.status(200).json(putStatusProduct); */
        res.status(200).json("aqui se modificaria el estado de los productos")
    } catch (error) {
        res.status(400).json({ error: error.message })        
    }
}

const updateProductsHandler = async (req, res) => {
    try {
/*         const upToDateProducts = await updateProductsHandler();
        res.status(200).json(upToDateProducts); */
        res.status(200).json("aqui se modifican los productos");
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
    
}

module.exports = {
    getAllProductsHandler,
    getDetailProductsHandler,   
    postProductsHandler,
    getFilterSuperAdminProductsHandler,
    putStatusProductsHandler,
    getAllProductsAdminHandler, 
    updateProductsHandler   
};