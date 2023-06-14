const { Children } = require('../../db');

const getAllChildren = async () => {

    const allChildren = await Children.findAll();

    return allChildren;
}

module.exports = { getAllChildren }