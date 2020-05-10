import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-coursede',
  templateUrl: 'course.html'
})
export class CoursedePage {
  
  constructor(public navCtrl: NavController) {
  }
  backchat(){
      this.navCtrl.pop();
  }
  
}