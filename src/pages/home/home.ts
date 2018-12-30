import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any, openTab?: any}>;
  rootPage:any = DashboardPage;
  
  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: "Beranda", component: DashboardPage },
      { title: "Settings", component: DashboardPage, openTab: 1 }
    ]
  }

  openPage(page) {
    this.nav.setRoot(page.component, { openTab: page.openTab });
  }

}
