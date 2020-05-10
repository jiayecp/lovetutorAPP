import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';
import { MyPage } from '../my/my';

@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  
  constructor(public navCtrl: NavController) {
  }
  
  close(){
    this.navCtrl.pop();
  }
  pushMy(){
    this.navCtrl.push(MyPage);
  }
  
}