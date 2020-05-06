import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ApplystuPage} from '../applystu/applystu';
import{ApplyteachPage} from '../applyteach/applyteach';
import{ChatPage} from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  applystupage

  constructor(public navCtrl: NavController) {
    this. applystupage=ApplystuPage
  }
  pushTeacher(){
    this.navCtrl.push(ApplystuPage);
  }
  pushStudent(){
    this.navCtrl.push(ApplyteachPage);
  }
  pushSearch(){
    this.navCtrl.push(ChatPage);
  }


 
}
