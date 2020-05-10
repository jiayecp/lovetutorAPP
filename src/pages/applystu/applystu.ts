import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

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
  pushHome(){
    this.navCtrl.push(HomePage);
  }
}