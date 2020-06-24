import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-lamparas',
  templateUrl: './lamparas.component.html',
  styleUrls: ['./lamparas.component.css']
})
export class LamparasComponent {

  ShowParallax(){
    ShowPalallax();
  }


}
