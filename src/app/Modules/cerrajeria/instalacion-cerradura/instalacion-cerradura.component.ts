import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-instalacion-cerradura',
  templateUrl: './instalacion-cerradura.component.html',
  styleUrls: ['./instalacion-cerradura.component.css']
})
export class InstalacionCerraduraComponent  {

  ShowParallax(){
    ShowPalallax();
  }


}
