import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PreviewPopupComponent } from './preview-popup/preview-popup.component';
import { Screen6Component } from './screen6/screen6.component';
import { Screen7Component } from './screen7/screen7.component';
import { Screen8Component } from './screen8/screen8.component';
import { Screen9Component } from './screen9/screen9.component';
import { Screen10Component } from './screen10/screen10.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Screen2Component,
    Screen3Component,
    Screen4Component,
    Screen5Component,
    PreviewPopupComponent,
    Screen6Component,
    Screen7Component,
    Screen8Component,
    Screen9Component,
    Screen10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
