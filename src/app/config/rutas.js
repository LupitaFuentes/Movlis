const router=require('express').Router();
const conexion = require('./conexion')

//get 
router.get('/',(req,res)=>{
	let sql ='select * from user'
	conexion.query(sql,(err, rows, fields)=>{
		if(err)throw err;
		else{
			res.json(rows);
		}
	})
})

//get 
router.get('/:id',(req,res)=>{
	const {id}=req.params
	let sql ='select * from user where id_user = ?'
	conexion.query(sql,[id],(err, rows, fields)=>{
		if(err)throw err;
		else{
			res.json(rows)
		}
	})
})

//agregar 
router.post('/',(req,res)=>{
	const{name,pass} = req.body
	let sql =`insert into user(name,pass) values('${name}','${pass}')`
	conexion.query(sql,(err,rows,fields)=>{
		if(err)throw err
		else{
			res.json({status: 'usuario agregado'})
		}
	})
})

//eliminar
router.delete('/:id',(req,res)=>{
	const{id}=req.params
	let sql=`delete from user where id_user = '${id}'`
	conexion.query(sql,(err,rows,fields)=>{
		if(err)throw err
		else{
			res.json({status: 'usuario eliminado'})
		}
	})
})

//modificar
router.put('/:id',(req,res)=>{
	const{id}=req.params
	const{name,pass}=req.body
	let sql=`update user set name = '${name}', pass = '${pass}' where id_user = '${id}'`
	conexion.query(sql,(err,rows,fields)=>{
		if(err)throw err
		else{
			res.json({status: 'usuario modificado'})
		}
	})
})

module.exports=router;