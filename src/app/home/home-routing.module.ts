import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { HomeHeaderComponent } from './home-header/home-header.component';

const routes : Routes=[
  {
    path:'home-header',
    component:HomeHeaderComponent
  }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class HomeRoutingModule { }
