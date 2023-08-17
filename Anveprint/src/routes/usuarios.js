const express = require('express');
const router = express.Router();

const usuarioController= require('../controllers/usuarioController');

router.get('/', usuarioController.list);
router.get('/AnvePrint', usuarioController.mostrarAnve);
router.get('/index', usuarioController.mostrarindex);
router.get('/registro', usuarioController.mostrarRegistro);//Ruta para mostrar formulario Registro
router.get('/login', usuarioController.mostrarlogin);//Ruta para mostrar Login
router.get('/admin', usuarioController.mostrarAdmin);//
router.get('/tablapedidos', usuarioController.mostrarTabla1);//
router.get('/tablausers', usuarioController.mostrarTabla2);//
router.get('/usuario/perfiluser', usuarioController.mostraruser);//
router.get('/carritoIndex', usuarioController.mostrarcarrito);
router.get('/Catalogos/Catalogo1', usuarioController.mostrarcatalogo);
router.get('/Catalogos/Catalogo2', usuarioController.mostrarcatalogo2);
router.get('/Catalogos/Catalogo3', usuarioController.mostrarcatalogo3);
router.post('/add', usuarioController.save); //Ruta para agregar un usuario desde registro.ejs
router.post('/login', usuarioController.autenticarLogin);//Ruta para iniciar sesion
// Ruta para insertar un producto (POST request)
router.post('/insertar-producto', usuarioController.insertarProducto);


module.exports = router;
