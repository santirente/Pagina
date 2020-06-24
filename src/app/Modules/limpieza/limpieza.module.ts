import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PisosTuristicosComponent } from './pisos-turisticos/pisos-turisticos.component';
import { VecinosComponent } from './vecinos/vecinos.component';
import { OficinasComponent } from './oficinas/oficinas.component';
import { ChaletsComponent } from './chalets/chalets.component';
import { NavesComponent } from './naves/naves.component';
import { FinDeObraComponent } from './fin-de-obra/fin-de-obra.component';

@NgModule({
  declarations: [PisosTuristicosComponent, VecinosComponent, OficinasComponent, ChaletsComponent, NavesComponent, FinDeObraComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    PisosTuristicosComponent,
    VecinosComponent,
    OficinasComponent,
    ChaletsComponent,
    NavesComponent,
    FinDeObraComponent
  ]
})
export class LimpiezaModule { }
