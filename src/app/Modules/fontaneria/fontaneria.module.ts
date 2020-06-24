import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesatrancosComponent } from './desatrancos/desatrancos.component';
import { CambioCisternaComponent } from './cambio-cisterna/cambio-cisterna.component';
import { GrifosComponent } from './grifos/grifos.component';
import { LatiguillosComponent } from './latiguillos/latiguillos.component';
import { MamparasComponent } from './mamparas/mamparas.component';

@NgModule({
  declarations: [DesatrancosComponent, CambioCisternaComponent, GrifosComponent, LatiguillosComponent, MamparasComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    DesatrancosComponent,
    CambioCisternaComponent,
    GrifosComponent,
    LatiguillosComponent,
    MamparasComponent
  ]
})
export class FontaneriaModule { }
