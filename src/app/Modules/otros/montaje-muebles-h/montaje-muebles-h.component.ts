import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-montaje-muebles-h',
  templateUrl: './montaje-muebles-h.component.html',
  styleUrls: ['./montaje-muebles-h.component.css']
})
export class MontajeMueblesHComponent {

  ShowParallax(){
    ShowPalallax();
  }


}
