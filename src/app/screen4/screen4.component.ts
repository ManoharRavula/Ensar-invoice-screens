import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-screen4',
  templateUrl: './screen4.component.html',
  styleUrls: ['./screen4.component.css']
})
export class Screen4Component implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<Screen4Component>    ) {}

  ngOnInit(): void {
  }

}
