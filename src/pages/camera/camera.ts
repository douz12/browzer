import { Camera, CameraOptions } from '@ionic-native/camera';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { Component } from '@angular/core';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(public camera: Camera, public platform: Platform,
              public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');
    if (this.platform.is('cordova')) {
      this.takeImage();
    } else {
      console.log('Not cordova platform');
    }

  }

  public takeImage(): void {
    if (this.platform.is('cordova')) {
      this.camera.getPicture(this.options).then((res) => {
        let base64Image = 'data:image/jpeg;base64,' + res;
      });
    }
  }

}
