import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FeedbackPage} from '../feedback/feedback'
@Component({
  selector: 'page-my',
  templateUrl: 'my.html'
})
export class MyPage {

  constructor(public navCtrl: NavController) {

  }
  pushfb(){
    this.navCtrl.push(FeedbackPage);
  }
}
