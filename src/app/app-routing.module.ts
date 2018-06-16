import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';

const routes : Routes =[
  
 { path:'home', component: HomeComponent},
 { path:'', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  {path:'feature1', loadChildren:'./feature1/feature1.module#Feature1Module'},
  { path: 'feature2', loadChildren:'./feature2/feature2.module#Feature2Module'},
  {path:'contact-us/:id', component:ContactUsComponent}
  

  
];

@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
