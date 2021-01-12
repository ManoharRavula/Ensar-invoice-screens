import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen9',
  templateUrl: './screen9.component.html',
  styleUrls: ['./screen9.component.css']
})
export class Screen9Component implements OnInit {

  constructor(private router: Router, private router2:Router) { }

  ngOnInit(): void {
  }
  wallet(){
    this.router.navigate(['./screen10']);
  }
  credit(){
    this.router2.navigate(['./screen8']);
  }

}
