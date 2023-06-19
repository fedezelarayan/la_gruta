const { Activity, ActivityType } = require("../../db");


// Handler para filtrado de tipos actividad por nombre

const ActivityFilterType = async (name) => {
    const allActivity = await Activity.findAll({
        include: {
            model: ActivityType,
            through: {
                attributes: [],
            },
        },
    });
    /* console.log(allActivity) */
    const activityFilter = allActivity.filter((activity) =>
        activity.dataValues.ActivityTypes.some((t) => t.name === name)
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
        include: {
            model: ActivityType,
            through: {
                attributes: [],
            },
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
