import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
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
  pushHome(){
    this.navCtrl.push(HomePage);
  }
}