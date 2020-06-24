import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-apertura-de-puertas',
  templateUrl: './apertura-de-puertas.component.html',
  styleUrls: ['./apertura-de-puertas.component.css']
})
export class AperturaDePuertasComponent {
  ShowParallax(){
    ShowPalallax();
  }


}
