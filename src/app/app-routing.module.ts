import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreviewPopupComponent } from './preview-popup/preview-popup.component';
import { Screen10Component } from './screen10/screen10.component';
import { Screen2Component } from './screen2/screen2.component';
import { Screen3Component } from './screen3/screen3.component';
import { Screen4Component } from './screen4/screen4.component';
import { Screen5Component } from './screen5/screen5.component';
import { Screen6Component } from './screen6/screen6.component';
import { Screen7Component } from './screen7/screen7.component';
import { Screen8Component } from './screen8/screen8.component';
import { Screen9Component } from './screen9/screen9.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'screen2', component: Screen2Component },
  {
    path: '',
    component: Screen2Component,
    children: [{ path: 'screen3', component: Screen3Component },{ path:'screen5', component: Screen5Component },{ path:'screen6' , component: Screen6Component},{path:'screen8', component: Screen8Component},{path:'screen9', component: Screen9Component},{path:'screen10', component:Screen10Component},]},
    {path: 'screen7', component: Screen7Component }
];
    

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
