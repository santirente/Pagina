import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AperturaDePuertasComponent } from './apertura-de-puertas/apertura-de-puertas.component';
import { CambioBombinComponent } from './cambio-bombin/cambio-bombin.component';
import { InstalacionCerraduraComponent } from './instalacion-cerradura/instalacion-cerradura.component';
import { CerrajeriaModule } from './cerrajeria.module';
const routes: Routes = [
  {
    path:'cerrajeria/Apertura-Pueras',
    component:AperturaDePuertasComponent
  }, 
  {
    path:'cerrajeria/Bombones',
    component:CambioBombinComponent
  },
  {
    path:'cerrajeria/cerraduras', 
    component:InstalacionCerraduraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CerrajeriaModule],
  exports: [RouterModule]
})
export class CerrajeriaRoutingModule { }
