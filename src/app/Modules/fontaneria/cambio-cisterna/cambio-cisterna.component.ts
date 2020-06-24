import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-cambio-cisterna',
  templateUrl: './cambio-cisterna.component.html',
  styleUrls: ['./cambio-cisterna.component.css']
})
export class CambioCisternaComponent  {

  ShowParallax(){
    ShowPalallax();
  }



}
