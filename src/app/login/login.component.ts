import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert:boolean = false;
  email:string;
  password:string;
  myimage:string = "assets/group-1223@1x.png";


  constructor(private router:Router) { 
  }
navigateto(){
  this.router.navigate(['/screen2']);
}
  ngOnInit(): void {
  }

}
