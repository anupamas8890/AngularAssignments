import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';

const routes : Routes=[
  {
    path:'gallery',
    component:GalleryComponent
    
  }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: []
})
export class Feature2RoutingModule { }
