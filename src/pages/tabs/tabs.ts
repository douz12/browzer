import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabs: any[];

  constructor() {
    this.tabs = [
      { title: 'Home', component: 'HomePage', icon: 'home' },
      { title: 'Camera', component: 'CameraPage', icon: 'camera' },
      { title: 'Profile', component: 'ProfilePage', icon: 'person' },
      { title: 'Notifications', component: 'NotificationsPage', icon: 'notifications' },
    ];
  }
}
