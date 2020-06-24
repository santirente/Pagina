import { Component, OnInit } from '@angular/core';

declare const ShowPalallax:any;
@Component({
  selector: 'app-chalets',
  templateUrl: './chalets.component.html',
  styleUrls: ['./chalets.component.css']
})
export class ChaletsComponent {

  ShowParallax(){
    ShowPalallax();
  }

  
 
}
