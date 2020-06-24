import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-grifos',
  templateUrl: './grifos.component.html',
  styleUrls: ['./grifos.component.css']
})
export class GrifosComponent {

  ShowParallax(){
    ShowPalallax();
  }



}
