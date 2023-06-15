const { Children } = require('../db');


const getAllChildren = async () => {

    const allChildren = await Children.findAll();

    return allChildren;
}

const createNewChild = ( name, edad, history, image ) => {
    if(!name || !history) throw Error('Faltan datos necesarios');

    if(typeof name !== 'string' || !isNaN(name)) throw Error('El nombre debe ser de tipo string');
    
    if(typeof edad !== 'number' || edad < 0 || edad > 18) throw Error('El niño debe tener entre 0 y 18 años');

    if(typeof history !== 'string') throw Error('La historia debe ser un string');
    
    const imgRegEx = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;

    if(!image.match(imgRegEx)) throw Error('La imagen debe ser cargada en formato URL');

    Children.create({ name, edad, history, image });

}

module.exports = { getAllChildren, createNewChild }