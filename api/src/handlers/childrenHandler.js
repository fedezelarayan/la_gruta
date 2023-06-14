


const getAllChildrenHandler = (req, res) => {
    try {
        res.status(200).send('Aca se trae a todos los children. (NIY)')
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


module.exports = { getAllChildrenHandler }