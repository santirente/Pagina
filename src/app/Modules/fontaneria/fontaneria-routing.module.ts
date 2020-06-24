import { NgModule,Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FontaneriaModule } from './fontaneria.module';
import { CambioCisternaComponent } from './cambio-cisterna/cambio-cisterna.component';
import { DesatrancosComponent } from './desatrancos/desatrancos.component';
import { GrifosComponent } from './grifos/grifos.component';
import { LatiguillosComponent } from './latiguillos/latiguillos.component';
import { MamparasComponent } from './mamparas/mamparas.component';

const routes: Routes = [
  {
    path:'fontaneria/cambio-cisterna',
    component:CambioCisternaComponent
  }, 
  {
    path:'fontaneria/desatrancos',
    component:DesatrancosComponent
  }, 
  {
    path:'fontaneria/grifos',
    component:GrifosComponent
  }, 
  {
    path:'fontaneria/latiguillos',
    component:LatiguillosComponent
  }, 
  {
    path:'fontaneria/mamaparas',
    component:MamparasComponent
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes),FontaneriaModule],
  exports: [RouterModule]
})
export class FontaneriaRoutingModule { }
