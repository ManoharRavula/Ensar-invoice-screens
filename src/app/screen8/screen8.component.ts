import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen8',
  templateUrl: './screen8.component.html',
  styleUrls: ['./screen8.component.css']
})
export class Screen8Component implements OnInit {

  constructor(private router: Router, private router2:Router) { }

  ngOnInit(): void {
  }
  debit(){
    this.router.navigate(['./screen9'])
  }
  wallet(){
    this.router2.navigate(['./screen10'])
  }

}
