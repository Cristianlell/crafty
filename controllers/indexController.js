const {productos} = require('../data/products_db');
const tutoriales = require('../data/tutorials_db');

module.exports = {
    index : (req,res) => {
        return res.render('index',{
            title : "Craftsy 2.0",
            productos,
            nuevos : productos.filter(producto => producto.category === "nuevo"),
            refact : productos.filter(producto => producto.category === "refaccionado"),
            usados : productos.filter(producto => producto.category === "usado"),
            tutoriales,
            userLog :req.session.userLog 
        })
    }
}