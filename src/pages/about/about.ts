import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TeanewsPage} from '../teanews/teanews' ;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  pushSearch(){
    this.navCtrl.push(TeanewsPage);
  }

}
