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
            res.render('admin')
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
//Funcion para mostrar admin.ejs
controller.mostrarAdmin = (req, res) => {
    res.render('admin'); // Asegúrate de que 'admin' coincida con el nombre de tu archivo de vista
};

controller.autenticarLogin = (req, res) => {
    const { correo, contrasena } = req.body;

    // Realiza la autenticación aquí, por ejemplo, consultando la base de datos
    // ...

    // Si la autenticación es exitosa, redirige a la página de perfil (por ejemplo)
    res.redirect('/admin'); // Cambia '/perfil' a la ruta que deseas redirigir después del inicio de sesión exitoso
};

module.exports = controller;
