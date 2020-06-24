import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LamparasComponent } from './lamparas/lamparas.component';
import { InterruptoresComponent } from './interruptores/interruptores.component';
import { VitroceramicaComponent } from './vitroceramica/vitroceramica.component';
import { TermosElecttricosComponent } from './termos-electtricos/termos-electtricos.component';

@NgModule({
  declarations: [LamparasComponent, InterruptoresComponent, VitroceramicaComponent, TermosElecttricosComponent],
  imports: [
    CommonModule
  ],
  exports:[
    LamparasComponent,
    InterruptoresComponent,
    VitroceramicaComponent,
    TermosElecttricosComponent
  ]
})
export class ElectricidadModule { }
