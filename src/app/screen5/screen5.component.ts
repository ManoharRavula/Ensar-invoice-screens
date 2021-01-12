import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { PreviewPopupComponent } from '../preview-popup/preview-popup.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screen5',
  templateUrl: './screen5.component.html',
  styleUrls: ['./screen5.component.css']
})
export class Screen5Component implements OnInit {

  constructor(public dialog: MatDialog, private router:Router) {}

  ngOnInit(): void {}
  openModalPopup() {
    this.dialog.open(PreviewPopupComponent, {
      position:{},
      data:{},

    });
  }
  totalpreview(){
    this.router.navigate(['./screen7']);
  }
}
