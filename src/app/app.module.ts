import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyPage } from '../pages/my/my';
import {ChatPage} from '../pages/chat/chat';
import {ApplystuPage} from '../pages/applystu/applystu';
import {ApplyteachPage} from '../pages/applyteach/applyteach';
import {FeedbackPage} from '../pages/feedback/feedback';
import {WechatPage} from '../pages/wechat/wechat';
import {TeanewsPage} from '../pages/teanews/teanews'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    ChatPage,
    ApplystuPage,
    ApplyteachPage,
    FeedbackPage,
    WechatPage,
    TeanewsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MyPage,
    ChatPage,
    ApplystuPage,
    ApplyteachPage,
    FeedbackPage,
    WechatPage,
    TeanewsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
