 const { 
    getAllProducts,
    postProducts,
    getDetailProducts,
    deleteProduct,
    restoreProductos,
/*    putStatusProducts,
    updateProducts,
    getFilterAdminProducts,
    getAllAdminProducts*/
} = require ('../controllers/productsControllers'); 

const getAllProductsHandler = async (req, res) => {
    try {
        const allProducts = await getAllProducts();
        res.status(200).json(allProducts); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getDetailProductsHandler = async (req, res) => {
    const { id_products } = req.params;
    try {
        const detailProducts = await getDetailProducts (id_products)
        res.status(200).json(detailProducts); 
    } catch (error) {
        res.status(400).json ({ error: error.message })
    }
};
const postProductsHandler = async (req, res) => {
    const {name, price, image, description, stock, type} = req.body
try {
    const product = await postProducts (name, price, image, description, stock, type)
    res.status(200).json("Producto creado exitosamente")
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

const deleteProducts = async (req, res) => {
    const {id} = req.params
    try {
        const delProduct = await deleteProduct(id);
        res.status(200).json("Producto eliminado.");
    } catch (error) {
        res.status(400).json({ error: error.message })        
    }
}

const restoreProducts = async (req, res) => {
    const { id } = req.params 
    try {
        const restProduct = await restoreProductos(id);
        res.status(200).json("Producto restaurado.");
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
    updateProductsHandler,
    deleteProducts,
    restoreProducts,   
};