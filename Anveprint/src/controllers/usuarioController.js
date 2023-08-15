const controller ={};

controller.list = (req, res)=>{
    req.getConnection((err, conn)=>{
        conn.query('SELECT * FROM usuarios',(err, usuarios)=>{
            if(err){
                res.json(err);
            }
            res.render('registro',{
                data: usuarios
            })
        });
    });
};

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

module.exports = controller;
