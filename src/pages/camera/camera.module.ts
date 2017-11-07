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
})
export class CameraPageModule {}
