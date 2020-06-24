import { Component, OnInit } from '@angular/core';

declare const Showsidenav:any;
declare const ShowDrop:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  Showside(){
    Showsidenav();
  }
  ShowDropDown(){
    ShowDrop();
  }
 
}
