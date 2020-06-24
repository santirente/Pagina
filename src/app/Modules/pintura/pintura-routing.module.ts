import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PinturaModule } from './pintura.module';
import { ExteriorInteriorComponent } from './exterior-interior/exterior-interior.component';
import { PreparacionSuperficieComponent } from './preparacion-superficie/preparacion-superficie.component';

const routes: Routes = [
  {
    path:'pintura/exterior-interior',
    component:ExteriorInteriorComponent
  },
  {
    path:'pintura/preparacion-superficie',
    component:PreparacionSuperficieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), PinturaModule],
  exports: [RouterModule]
})
export class PinturaRoutingModule { }
