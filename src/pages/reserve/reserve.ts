import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-reserve',
  templateUrl: 'reserve.html'
})
export class ReservePage {
  
  constructor(public navCtrl: NavController) {
  }
  backhome(){
      this.navCtrl.pop();
  }
  // setBackButtonText(){
  //   this.navCtrl.pop();
  // }
  
}