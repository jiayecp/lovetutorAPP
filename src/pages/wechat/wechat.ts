import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-wechat',
  templateUrl: 'wechat.html'
})
export class WechatPage {
  
  constructor(public navCtrl: NavController) {
  }
  backchat(){
      this.navCtrl.pop();
  }
  
}