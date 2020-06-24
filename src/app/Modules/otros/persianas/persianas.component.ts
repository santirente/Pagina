import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-persianas',
  templateUrl: './persianas.component.html',
  styleUrls: ['./persianas.component.css']
})
export class PersianasComponent {

  ShowParallax(){
    ShowPalallax();
  }

 
}
