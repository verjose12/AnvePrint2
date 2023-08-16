const controller ={};

controller.list = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM usuarios',(err, usuarios)=>{
            if(err){
                res.json(err);
            }
            res.render('index',{
                data: usuarios
            })
        });
    });
};

//Metodo para registrar usuario
controller.save = (req, res)=>{
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios set ?',[data],(err, usuarios)=>{
            console.log(usuarios);
            res.render('usuario/perfiluser')
        });
    })
    /*console.log(req.body); //recibimos los datos a traves de este objeto req.body
    res.render('admin')*/
    };

// Función para mostrar la vista de registro
controller.mostrarRegistro = (req, res) => {
    res.render('registro');
};

// Función para mostrar la vista de AnvePrint.ejs
controller.mostrarAnve = (req, res) => {
    res.render('AnvePrint');
};
// Función para mostrar la vista de index.ejs
controller.mostrarindex = (req, res) => {
    res.render('index');
};
// Función para mostrar la vista de login
controller.mostrarlogin = (req, res) => {
    res.render('login');
};

// Función para mostrar la vista de perfiluser.ejs
controller.mostraruser = (req, res) => {
    res.render('usuario/perfiluser');
};

//Funcion para mostrar admin.ejs con la
controller.mostrarAdmin = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        const query = 'SELECT * FROM productos';
        conn.query(query, (err, productos) => {
            if (err) {
                return res.json(err);
            }
            res.render('admin', {
                data: productos // Pasa la variable 'data' a la vista
            });
        });
    });
};

//metodo para ingresar al perfil
controller.autenticarLogin = (req, res) => {
    const { correo, contrasena } = req.body;

    // Realiza la autenticación aquí, por ejemplo, consultando la base de datos
    // ...

    // Si la autenticación es exitosa, redirige a la página de perfil (por ejemplo)
    res.redirect('admin'); // Cambia '/perfil' a la ruta que deseas redirigir después del inicio de sesión exitoso
};

//Funcion para mostrar admin.ejs esta funcion va de la mano con la funcion debajo
controller.mostrarAdmin = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }
        const query = 'SELECT * FROM productos';
        conn.query(query, (err, productos) => {
            if (err) {
                return res.json(err);
            }
            res.render('admin', {
                data: productos // Pasa la variable 'data' a la vista
            });
        });
    });
};

//Metodo post insertar producto a la tabla productos de admin
controller.insertarProducto = (req, res) => {
    const { nombre, descripcion, precio } = req.body;

    req.getConnection((err, conn) => {
        if (err) {
            return res.json(err);
        }

        const query = 'INSERT INTO productos (nombre, descripcion, precio) VALUES (?, ?, ?)';
        conn.query(query, [nombre, descripcion, precio], (err, result) => {
            if (err) {
                return res.json(err);
            }

            res.redirect('/admin'); // Redirecciona a la página de admin después de la inserción
        });
    });
};


module.exports = controller;
