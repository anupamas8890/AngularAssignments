import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './our-team/our-team.component';
import { Feature1RoutingModule } from './feature1-routing.module';

@NgModule({
  imports: [
    CommonModule, Feature1RoutingModule
  ],
  declarations: [OurTeamComponent],
  exports:[OurTeamComponent]
})
export class Feature1Module { }
