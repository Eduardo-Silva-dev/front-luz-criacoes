import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { CampusFestivalComponent } from './core/campus-festival/campus-festival.component';
import { GramadoSummitComponent } from './core/gramado-summit/gramado-summit.component';
import { FireFestivalComponent } from './core/fire-festival/fire-festival.component';
import { FeiraConstruconComponent } from './core/feira-construcon/feira-construcon.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',          component: HomeComponent },
    { path: 'campus-festival',          component: CampusFestivalComponent },
    { path: 'gramado-summit',          component: GramadoSummitComponent },
    { path: 'fire-festival',          component: FireFestivalComponent },
    { path: 'feira-construcon',          component: FeiraConstruconComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule { }
