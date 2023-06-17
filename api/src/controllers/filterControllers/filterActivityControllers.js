const { Activity } = require("../../db");

const ActivityFilterType = async (name) => {
    const allActivity = await Activity.findAll({
        include: {
            model: ActivityType,
            through: {
                attributes: [],
            },
        },
    });
    const activityFilter = allActivity.filter((activity) =>
        activity.ActivityTypes.some((t) => t.name === name)
    );
    if (!activityFilter.length) {
        throw new Error("Tipo de Actividades no encontrados");
    }
    return activityFilter;
};

const filtroNombre = async (name) => {
    const actividadesFiltrados = await Activity.findAll({
        where: {
            name: name,
        },
    });
    return actividadesFiltrados;
};

module.exports = { ActivityFilterType, filtroNombre };

/* const filtroTipo = async (activityType) => {
    const actividadesFiltrados = await Activity.findAll({
        where: {
            name: activityType,  // <-- Cambiar la propiedad NAME por tipo de producto.
        }
    })
    return actividadesFiltrados;
}

module.exports = { filtroTipo, filtroNombre };*/
