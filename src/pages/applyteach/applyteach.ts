import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-applystu',
  templateUrl: 'applyteach.html'
})
export class ApplyteachPage {
  
  constructor(public navCtrl: NavController) {
  }
  backhome(){
    this.navCtrl.pop();
  }
  
}