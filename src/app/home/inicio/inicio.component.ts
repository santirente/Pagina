import { Component, OnInit } from '@angular/core';

declare const showCarousel: any;
declare const ShowPalallax:any;
declare const ShowSlider: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {
  Show(){
    showCarousel();
  }
  ShowPArallax(){
    ShowPalallax();
  }
  Showslider(){
    ShowSlider();

  }
}