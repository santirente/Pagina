import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiciosRoutingModule } from './servicios-routing.module';
import { LimpiezaComponent } from './limpieza/limpieza.component';
import { FontaneriaComponent } from './fontaneria/fontaneria.component';
import { AcarreosComponent } from './acarreos/acarreos.component';
import { PinturaComponent } from './pintura/pintura.component';

@NgModule({
  declarations: [LimpiezaComponent, FontaneriaComponent, AcarreosComponent, PinturaComponent],
  imports: [
    CommonModule,
    ServiciosRoutingModule
  ],
  exports:[
    LimpiezaComponent,
    FontaneriaComponent,
    AcarreosComponent,
    PinturaComponent
  ]
})
export class ServiciosModule { }
