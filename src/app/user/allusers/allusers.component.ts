import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  constructor(private UserService:UserService) { }

  ngOnInit(): void {
    this.listarUsuarios()
  }

  listarUsuarios(){
    this.UserService.getUsers().subscribe(
      res=>{
        console.log(res)
        console.log('si entre')
      },
      err=> console.log(err)
    );
  }
}
