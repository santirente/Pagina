import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LimpiezaModule } from './limpieza.module';
import { ChaletsComponent } from './chalets/chalets.component';
import { FinDeObraComponent } from './fin-de-obra/fin-de-obra.component';
import { NavesComponent } from './naves/naves.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { PisosTuristicosComponent } from './pisos-turisticos/pisos-turisticos.component';
import { VecinosComponent } from './vecinos/vecinos.component';

const routes: Routes = [
  {
    path:'limpieza/chalets',
    component:ChaletsComponent
  },
  {
    path:'limpieza/fin-de-obra',
    component:FinDeObraComponent
  },
  {
    path:'limpieza/naves',
    component:NavesComponent
  },
  {
    path:'limpieza/oficinas',
    component:OficinasComponent
  },
  {
    path:'limpieza/pisos-turisticos',
    component:PisosTuristicosComponent
  },
  {
    path:'limpieza/vecinos',
    component:VecinosComponent
  }
];

@NgModule({ 
  imports: [RouterModule.forChild(routes),LimpiezaModule],
  exports: [RouterModule]
})
export class LimpiezaRoutingModule { }
