import { Component} from '@angular/core';
import {  NavController } from 'ionic-angular';
import {WechatPage} from '../wechat/wechat';
import {ReservePage} from '../reserve/reserve'
@Component({
  selector: 'page-teanews',
  templateUrl: 'teanews.html'
})
export class TeanewsPage {
  
  constructor(public navCtrl: NavController) {
  }
  backhome(){
      this.navCtrl.pop();
  }
  puchat(){
      this.navCtrl.push(WechatPage)
  }
  pushre(){
      this.navCtrl.push(ReservePage);
  }
  // setBackButtonText(){
  //   this.navCtrl.pop();
  // }
  
}