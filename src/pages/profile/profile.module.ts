import { IonicPageModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { ProfilePage } from './profile';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  exports: [
    ProfilePage
  ],
})
export class ProfilePageModule {}
