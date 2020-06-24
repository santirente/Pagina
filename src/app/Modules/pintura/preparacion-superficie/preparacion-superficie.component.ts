import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-preparacion-superficie',
  templateUrl: './preparacion-superficie.component.html',
  styleUrls: ['./preparacion-superficie.component.css']
})
export class PreparacionSuperficieComponent {

  ShowParallax(){
    ShowPalallax();
  }


}
