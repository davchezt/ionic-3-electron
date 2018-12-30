import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})

export class DashboardPage {
  tab1Root = MenuPage;
  tab2Root = SettingsPage;

  @ViewChild("dTabs") tabRef: Tabs;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let openTab = this.navParams.get("openTab");
    if (openTab) {
      this.tabRef.select(openTab)
    }
  }

}
