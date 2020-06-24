import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-mamparas',
  templateUrl: './mamparas.component.html',
  styleUrls: ['./mamparas.component.css']
})
export class MamparasComponent {

  ShowParallax(){
    ShowPalallax();
  }


}
