const { Children } = require('../db');

// *--------------------------Función para traerse a todos los niños de la DB-------------
const getAllChildren = async () => {

    const allChildren = await Children.findAll();

    return allChildren;
}

//* --------------------------Función para crear a un nuevo niño en la DB-----------------

const createNewChild = async ( name, edad, history, image ) => {

    // ?-------------------Validación de los datos mandados-------------------------------

    if(!name || !history) throw Error('Faltan datos necesarios');

    if(typeof name !== 'string' || !isNaN(name)) throw Error('El nombre debe ser de tipo string');
    
    if(typeof edad !== 'number' || edad < 0 || edad > 18) throw Error('El niño debe tener entre 0 y 18 años');

    if(typeof history !== 'string') throw Error('La historia debe ser un string');
    
    const imgRegEx = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;

    if(!image.match(imgRegEx)) throw Error('La imagen debe ser cargada en formato URL');

    // ?-------------------Creación del niño----------------------------------------------

    const newChild = await Children.create({ name, edad, history, image });

    return newChild

}

//* --------------------------Función para eliminar a un niño de la DB por ID-------------

const deleteChild = async (id) => {
    const child = await Children.findByPk(id);
    const deletedChild = await child.destroy();
    return deletedChild;
}

module.exports = { getAllChildren, createNewChild, deleteChild }