import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
  let config = {
 apiKey: "AIzaSyDDKw1R6JBJ9lMZYOGvO8ApoAdEHDdO_O8",
 authDomain: "webmobile10-7e673.firebaseapp.com",
 databaseURL: "https://webmobile10-7e673.firebaseio.com",
 projectId: "webmobile10-7e673",
 storageBucket: "webmobile10-7e673.appspot.com",
 };
	firebase.initializeApp(config);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}

