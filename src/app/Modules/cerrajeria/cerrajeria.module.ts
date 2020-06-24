import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstalacionCerraduraComponent } from './instalacion-cerradura/instalacion-cerradura.component';
import { CambioBombinComponent } from './cambio-bombin/cambio-bombin.component';
import { AperturaDePuertasComponent } from './apertura-de-puertas/apertura-de-puertas.component';

@NgModule({
  declarations: [InstalacionCerraduraComponent, CambioBombinComponent, AperturaDePuertasComponent],
  imports: [
    CommonModule,
  ],  
  exports: [
    InstalacionCerraduraComponent,
    CambioBombinComponent, 
    AperturaDePuertasComponent
  ]
})
export class CerrajeriaModule { }
