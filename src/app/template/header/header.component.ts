import { Component, OnInit } from '@angular/core';

declare const Showsidenav:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  Showside(){
    Showsidenav();
  }
 
}
