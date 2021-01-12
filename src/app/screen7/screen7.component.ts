import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen7',
  templateUrl: './screen7.component.html',
  styleUrls: ['./screen7.component.css']
})
export class Screen7Component implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  makepay(){
    this.router.navigate(['./screen8']);

  }

}
