import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MontajeMueblesCComponent } from './montaje-muebles-c/montaje-muebles-c.component';
import { MontajeMueblesHComponent } from './montaje-muebles-h/montaje-muebles-h.component';
import { PersianasComponent } from './persianas/persianas.component';
import { FalsoTechoComponent } from './falso-techo/falso-techo.component';
import { APuertasLabadorasComponent } from './apuertas-labadoras/apuertas-labadoras.component';

@NgModule({
  declarations: [MontajeMueblesCComponent, MontajeMueblesHComponent, PersianasComponent, FalsoTechoComponent, APuertasLabadorasComponent],
  imports: [
    CommonModule,
  ], 
  exports:[
    MontajeMueblesCComponent,
    MontajeMueblesHComponent,
    PersianasComponent,
    FalsoTechoComponent,
    APuertasLabadorasComponent
  ]
})
export class OtrosModule { }
