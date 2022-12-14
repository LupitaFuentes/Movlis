import { Component, OnInit } from '@angular/core';
import {User, UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user:User={
    id_user:0,
    name:'',
    pass:''
  };

  constructor(private UserService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  add(){
    delete this.user.id_user;
    this.UserService.addUser(this.user).subscribe();
    this.router.navigate(['/home']);
  }

}
