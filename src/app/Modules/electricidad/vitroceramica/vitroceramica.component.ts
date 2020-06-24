import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-vitroceramica',
  templateUrl: './vitroceramica.component.html',
  styleUrls: ['./vitroceramica.component.css']
})
export class VitroceramicaComponent {

  ShowParallax(){
    ShowPalallax();
  }

 
}
