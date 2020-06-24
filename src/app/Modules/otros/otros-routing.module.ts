import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtrosModule } from './otros.module';
import { APuertasLabadorasComponent } from './apuertas-labadoras/apuertas-labadoras.component';
import { FalsoTechoComponent } from './falso-techo/falso-techo.component';
import { MontajeMueblesCComponent } from './montaje-muebles-c/montaje-muebles-c.component';
import { MontajeMueblesHComponent } from './montaje-muebles-h/montaje-muebles-h.component';
import { PersianasComponent } from './persianas/persianas.component';

const routes: Routes = [
  {
    path:'otros/puertas',
    component:APuertasLabadorasComponent
  },
  {
    path:'otros/falso-techo',
    component:FalsoTechoComponent
  },
  {
    path:'otros/muebles-cocina',
    component:MontajeMueblesCComponent
  },
  {
    path:'otros/muebles-habitacion',
    component:MontajeMueblesHComponent
  },
  {
    path:'otros/persianas',
    component:PersianasComponent
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes),OtrosModule],
  exports: [RouterModule]
})
export class OtrosRoutingModule { }
