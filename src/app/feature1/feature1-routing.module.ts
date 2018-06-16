import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes } from '@angular/router';
import { OurTeamComponent } from './our-team/our-team.component';

/*const routes: Routes=[
  {path:'', component:OurTeamComponent},
  {path:'our-team', component:OurTeamComponent}
];
*/
const routes: Routes=[
{
  path:'our-team',
  component:OurTeamComponent
}
];
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: []
})
export class Feature1RoutingModule { 
  
}
