import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-coursede',
  templateUrl: 'coursede.html'
})
export class CoursedePage {
  
  constructor(public navCtrl: NavController) {
  }
  backhome(){
      this.navCtrl.pop();
  }
  
}