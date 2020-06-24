import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-latiguillos',
  templateUrl: './latiguillos.component.html',
  styleUrls: ['./latiguillos.component.css']
})
export class LatiguillosComponent  {

  ShowParallax(){
    ShowPalallax();
  }


}
