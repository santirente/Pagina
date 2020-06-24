import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-montaje-muebles-c',
  templateUrl: './montaje-muebles-c.component.html',
  styleUrls: ['./montaje-muebles-c.component.css']
})
export class MontajeMueblesCComponent {
  ShowParallax(){
    ShowPalallax();
  }

}
