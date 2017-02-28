import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { MainPage } from '../main/main';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController  ) {

  }

  loginIn() {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(MainPage);
  }
}
