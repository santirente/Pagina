import { Component, OnInit } from '@angular/core';

declare const showCarousel: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent  {
  Show(){
    showCarousel();
  }
}