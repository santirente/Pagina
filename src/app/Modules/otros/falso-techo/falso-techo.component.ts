import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-falso-techo',
  templateUrl: './falso-techo.component.html',
  styleUrls: ['./falso-techo.component.css']
})
export class FalsoTechoComponent  {

  ShowParallax(){
    ShowPalallax();
  }


}
