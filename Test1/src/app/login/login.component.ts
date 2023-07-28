import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../serv/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  dataval:any;
constructor(private rot:Router,private api:DataService)
{
  this.dataval=this.api.students
  console.log(this.api.students)
}
login()
{
  this.rot.navigate(['S1'])
}
}
