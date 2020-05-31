import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './home/inicio/inicio.component';
import { ServiciosModule } from './Modulos/servicios/servicios.module';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';

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
  ServiciosModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
