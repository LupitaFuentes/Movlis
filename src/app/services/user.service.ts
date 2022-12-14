import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='/user';
  constructor(private http: HttpClient) { }

  //get usuarios
getUsers(){
	return this.http.get(this.url);
}

//get usuario
getUser(id: string){
	return this.http.get(this.url+'/'+id);
}

//agregar usuario
addUser(user:any){
	return this.http.post(this.url, user);
}

//eliminar
deleteUser(id:string){
	return this.http.delete(this.url+'/'+id);
}

//modificar usuario
editUser(id:string, user:any){
	return this.http.put(this.url+'/'+id, user);
}

}
export interface User{
	id_user?:number;
	name?:string;
	pass?:string;
}
