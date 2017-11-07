import { Camera } from '@ionic-native/camera';
import { CameraPage } from './camera';
import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    CameraPage,
  ],
  imports: [
    IonicPageModule.forChild(CameraPage),
  ],
  exports: [
    CameraPage
  ],
  providers: [
    Camera
  ],
})
export class CameraPageModule {}
