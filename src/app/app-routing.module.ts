import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeHeaderComponent } from './home/home-header/home-header.component';

const routes : Routes=[
  {path:'Home',component:HomeHeaderComponent},
  {path: 'home', loadChildren:'./home/home.module#HomeModule'}
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
