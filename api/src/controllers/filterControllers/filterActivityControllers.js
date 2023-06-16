const { Activity } = require ('../../db');

const filtroTipo = async (activityType) => {
    const actividadesFiltrados = await Activity.findAll({
        where: {
            name: activityType,  // <-- Cambiar la propiedad NAME por tipo de producto.
        }
    })
    return actividadesFiltrados;
}

const filtroNombre = async (name) => {
    const actividadesFiltrados = await Activity.findAll({
        where: {
            name: name,
        }
    })
    return actividadesFiltrados;
}

module.exports = { filtroTipo, filtroNombre };