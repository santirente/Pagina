import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-desatrancos',
  templateUrl: './desatrancos.component.html',
  styleUrls: ['./desatrancos.component.css']
})
export class DesatrancosComponent {

  ShowParallax(){
    ShowPalallax();
  }



}
