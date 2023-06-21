import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CampusFestivalComponent } from './campus-festival/campus-festival.component';
import { GramadoSummitComponent } from './gramado-summit/gramado-summit.component';
import { FireFestivalComponent } from './fire-festival/fire-festival.component';
import { FeiraConstruconComponent } from './feira-construcon/feira-construcon.component';



@NgModule({
  declarations: [
    HomeComponent,
    CampusFestivalComponent,
    GramadoSummitComponent,
    FireFestivalComponent,
    FeiraConstruconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
