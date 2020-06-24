import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
import { CerrajeriaRoutingModule } from './Modules/cerrajeria/cerrajeria-routing.module';
import { ElectricidadRoutingModule } from './Modules/electricidad/electricidad-routing.module';
import { FontaneriaRoutingModule } from './Modules/fontaneria/fontaneria-routing.module';
import { LimpiezaRoutingModule } from './Modules/limpieza/limpieza-routing.module';
import { OtrosRoutingModule } from './Modules/otros/otros-routing.module';
import { PinturaRoutingModule } from './Modules/pintura/pintura-routing.module';

const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/inicio'
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CerrajeriaRoutingModule,
    ElectricidadRoutingModule,
    FontaneriaRoutingModule,
    LimpiezaRoutingModule,
    OtrosRoutingModule,
    PinturaRoutingModule

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
