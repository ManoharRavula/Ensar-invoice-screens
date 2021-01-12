import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Screen4Component } from '../screen4/screen4.component';

@Component({
  selector: 'app-screen3',
  templateUrl: './screen3.component.html',
  styleUrls: ['./screen3.component.css'],
})
export class Screen3Component implements OnInit {
  constructor(public dialog: MatDialog, private router:Router) {}
  ngOnInit(): void {}

  openModalPopup() {
    this.dialog.open(Screen4Component, {
      // width: '550px',
      position: {
        // left: '200px',
        // right: '120px',
        // bottom: '20px',
        // top: '20px',
      },
      data: {},
    });
  }
  submit(){
    this.router.navigate(['./screen5']);

  }
  
}
