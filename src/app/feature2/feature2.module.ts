import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { Feature2RoutingModule } from './feature2-routing.module';

@NgModule({
  imports: [
    CommonModule,Feature2RoutingModule
  ],
  exports:[GalleryComponent],
  declarations: [GalleryComponent]
})
export class Feature2Module { }
