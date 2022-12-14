require('./conexion');

const express=require('express');
const port=(process.env.port || 3000);

const app=express();

app.use(express.json());

app.set('port',port);

app.use('/user',require('./rutas'));

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log('Error al iniciar servidor: '+error)
    }else{
        console.log('Servidor iniciado en el puerto: '+port)
    }
});