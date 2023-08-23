const multer = require ('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, "assets"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const uploadImage = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png|gif/;
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        if(mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: El archivo no es de tipo imagen.");
    },
}).single("image");

module.exports = uploadImage