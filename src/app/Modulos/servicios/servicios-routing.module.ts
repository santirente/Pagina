import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { FontaneriaComponent } from './fontaneria/fontaneria.component';
import { AcarreosComponent } from './acarreos/acarreos.component';
import { PinturaComponent } from './pintura/pintura.component';

const routes: Routes = [
  {
    path:"user/limpieza",
    component:LimpiezaComponent
  },
  {
    path:"user/fontaneria",
    component:FontaneriaComponent
  },
  {
    path:"user/acarreos",
    component:AcarreosComponent
  },
  {
    path:"user/pintura",
    component:PinturaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiciosRoutingModule { }
