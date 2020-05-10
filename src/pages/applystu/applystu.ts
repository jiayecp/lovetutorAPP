import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-applystu',
  templateUrl: 'applystu.html'
})
export class ApplystuPage {
  
  constructor(public navCtrl: NavController) {
  }

 close(){
    this.navCtrl.pop();
  }
  
}