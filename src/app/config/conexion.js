const mysql = require('mysql');
const conexion=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306,
    database:'movie'
});

conexion.connect((err)=>{
    if(err){
        console.log("No Conectado "+err);
    }else{
        console.log("Conectado");
    }
});

module.exports=conexion;