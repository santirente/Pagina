import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreparacionSuperficieComponent } from './preparacion-superficie/preparacion-superficie.component';
import { ExteriorInteriorComponent } from './exterior-interior/exterior-interior.component';

@NgModule({
  declarations: [PreparacionSuperficieComponent, ExteriorInteriorComponent],
  imports: [
    CommonModule,
  ],
  exports:[
    PreparacionSuperficieComponent,
    ExteriorInteriorComponent
  ]
})
export class PinturaModule { }
