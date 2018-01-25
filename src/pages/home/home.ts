import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AndroidExoplayer } from '@ionic-native/android-exoplayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private androidExoPlayer: AndroidExoplayer) 
    { }
    this.androidExoPlayer.show({url: 'https://www.youtube.com/watch?v=8GX9krUThE8'});
}
