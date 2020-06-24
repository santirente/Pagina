import { Component, OnInit } from '@angular/core';
declare const ShowPalallax:any;
@Component({
  selector: 'app-interruptores',
  templateUrl: './interruptores.component.html',
  styleUrls: ['./interruptores.component.css']
})
export class InterruptoresComponent {

  ShowParallax(){
    ShowPalallax();
  }


}
