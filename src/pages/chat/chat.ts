import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import {WechatPage} from '../wechat/wechat';
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  
  constructor(public navCtrl: NavController) {
  }
  pushchat(){
    this.navCtrl.push(WechatPage);
  }
  close(){
     this.navCtrl.pop();
   }
}
