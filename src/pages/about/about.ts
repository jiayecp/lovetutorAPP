import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatPage} from '../chat/chat' 
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  pushSearch(){
    this.navCtrl.push(ChatPage);
  }

}
