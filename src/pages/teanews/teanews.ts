import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-teanews',
  templateUrl: 'teanews.html'
})
export class TeanewsPage {
  
  constructor(public navCtrl: NavController) {
  }
  backhome(){
      this.navCtrl.pop();
  }
  // setBackButtonText(){
  //   this.navCtrl.pop();
  // }
  
}