import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterruptoresComponent } from './interruptores/interruptores.component';
import { LamparasComponent } from './lamparas/lamparas.component';
import { TermosElecttricosComponent } from './termos-electtricos/termos-electtricos.component';
import { VitroceramicaComponent } from './vitroceramica/vitroceramica.component';
import { ElectricidadModule } from './electricidad.module';

const routes: Routes = [
  {
    path:'electricidad/interruptores',
    component:InterruptoresComponent
  },
  {
    path:'electricidad/lamparas',
    component:LamparasComponent
  },
  {
    path:'electricidad/termos-electricos',
    component:TermosElecttricosComponent
  },
  {
    path:'electricidad/vitroceramica',
    component:VitroceramicaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ElectricidadModule],
  exports: [RouterModule]
})
export class ElectricidadRoutingModule { }
