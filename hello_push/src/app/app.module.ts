import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
declare var BMSPush: any;
declare var BMSClient: any;

BMSClient.initialize(".ng.bluemix.net");
var appGUID = "your App GUID";
var clientSecret = "Your Client Secret";
var options = {};
BMSPush.initialize(appGUID,clientSecret,options);

var success = function(response) { console.log("Success: " + response); };
var failure = function(response) { console.log("Error: " + response); };


// Register device for push notification without UserId
var options = {};
BMSPush.registerDevice(options, success, failure);


var handleNotificationCallback = function(notification) {
	// notification is a JSON object
	alert(notification.message);
}

BMSPush.registerNotificationsCallback(handleNotificationCallback);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
