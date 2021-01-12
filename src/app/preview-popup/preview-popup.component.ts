import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preview-popup',
  templateUrl: './preview-popup.component.html',
  styleUrls: ['./preview-popup.component.css']
})
export class PreviewPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef <PreviewPopupComponent> , private router:Router ) { }

  ngOnInit(): void {
  }
  send(){
    this.router.navigate(['./screen6']);
  }

}
