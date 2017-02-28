import { Component } from '@angular/core';

import { NavController ,Nav} from 'ionic-angular';

import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController  ) {

  }

  loginPage() {
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(LoginPage);
  }
}
