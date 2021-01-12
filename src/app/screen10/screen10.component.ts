import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen10',
  templateUrl: './screen10.component.html',
  styleUrls: ['./screen10.component.css']
})
export class Screen10Component implements OnInit {

  constructor(private router:Router, private router2: Router ) { }

  ngOnInit(): void {
  }
  credit(){
    this.router.navigate(['./screen8']);
  }
  debit(){
    this.router2.navigate(['./screen9']);
  }


}
