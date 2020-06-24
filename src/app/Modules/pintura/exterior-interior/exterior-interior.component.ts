import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-exterior-interior',
  templateUrl: './exterior-interior.component.html',
  styleUrls: ['./exterior-interior.component.css']
})
export class ExteriorInteriorComponent {

  ShowParallax(){
    ShowPalallax();
  }

  

}
