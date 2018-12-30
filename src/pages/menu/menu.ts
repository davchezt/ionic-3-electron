import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Electron } from '../../providers/electron/electron';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public elect: Electron) {
    
  }

  ionViewDidLoad() {
  }

  zoomIn(){
    this.elect.zoomIn();
  }
  zoomOut(){
    this.elect.zoomOut();
  }

}
