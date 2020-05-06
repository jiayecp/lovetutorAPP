import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  chatPage;

  constructor(public navCtrl: NavController) {
    this.chatPage=ChatPage;

  }
  pushChat(){
    this.navCtrl.push(this.chatPage);
  }


 
}
