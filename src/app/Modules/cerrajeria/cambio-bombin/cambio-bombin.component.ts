import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-cambio-bombin',
  templateUrl: './cambio-bombin.component.html',
  styleUrls: ['./cambio-bombin.component.css']
})
export class CambioBombinComponent  {

  ShowParallax(){
    ShowPalallax();
  }



}
