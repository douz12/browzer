import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { CameraPageModule } from '../pages/camera/camera.module';
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { NotificationsPageModule } from '../pages/notifications/notifications.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TabsModule } from '../pages/tabs/tabs.module';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    CameraPageModule,
    HomePageModule,
    HttpClientModule,
    NotificationsPageModule,
    ProfilePageModule,
    TabsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmdjknWLRtEDRpdjZnhCdPe12aMXMEjpw'
    }),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
