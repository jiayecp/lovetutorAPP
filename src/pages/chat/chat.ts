import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {
  
  constructor(public navCtrl: NavController) {
  }
<<<<<<< .mine
  // setBackButtonText(){
  //   this.navCtrl.pop();
  // }
  
||||||| .r9
=======

  close(){
    this.navCtrl.pop();
  }
>>>>>>> .r10
}
