import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';
import {CoursedePage} from '../coursede/coursede'
@Component({
  selector: 'page-course',
  templateUrl: 'course.html'
})
export class CoursePage {
  
  constructor(public navCtrl: NavController) {
  }
  pushcoursede(){
    this.navCtrl.push(CoursedePage);
  }
  backhome(){
      this.navCtrl.pop();
  }
 
}