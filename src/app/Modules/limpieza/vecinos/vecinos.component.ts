import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-vecinos',
  templateUrl: './vecinos.component.html',
  styleUrls: ['./vecinos.component.css']
})
export class VecinosComponent {
  ShowParallax(){
    ShowPalallax();
  }

}
