import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-pisos-turisticos',
  templateUrl: './pisos-turisticos.component.html',
  styleUrls: ['./pisos-turisticos.component.css']
})
export class PisosTuristicosComponent {
  ShowParallax(){
    ShowPalallax();
  }

}
