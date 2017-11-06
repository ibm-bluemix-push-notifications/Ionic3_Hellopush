# Ionic3_HelloPush

Cordova_Ionic_HelloPush is an example usage of Bluemix push Cordova plugin in Ionic platform.

## Prerequisites

<ol>
<li>Cordova Latest version</li>
<li>Ionic </li>
<li>Android Studio</li>
<li>Xcode</li>
</ol>

 To install the Ionic platform follow this [doc](https://ionicframework.com/getting-started/)

## Creating Ionic App.

To create an Ionic app follow the below steps,

1. Open the terminal app and run the following command to create an app

  ```
  ionic start {appname} {template}
  ```
  For Example;

  ```
  ionic start hellopush blank
  ```
2. Go to your appname directory,

  ```
  cd {appname}
  ```

  For Example;

  ```
  cd hellopush
  ```
3. Add platforms

  ```
  ionic cordova platform add ios
  ionic cordova platform add android
  ```
4. Add the <strong>bms-push</strong> plugin to the project

  ```
  ionic cordova plugin add bms-push
  ```

  It will add `bms-push` and `bms-core` plugins to your app


5. Edit the `app.module.ts` to `initialize` the Core and push plugins. Then add code to register for push.

```
declare var BMSPush: any;
declare var BMSClient: any;

BMSClient.initialize("Your app region");
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
```


6. Do the `ionic cordova prepare` and `ionic cordova build`.

>Note: You may get ios build fail and you can neglect it.

## Run Applications

### Android

1. Get your `package` from `config.xml` and add it to [Firebase app](https://console.firebase.google.com/). Then add `com.ibm.mobilefirstplatform.clientsdk.android.push` to teh same firebase app. Download the `google-services.json` and add to **platforms -> android**

2. Open the `build.gradle` file and add the following,

  ```


  buildscript {
    ....
    dependencies {
       ....
        classpath 'com.google.gms:google-services:3.0.0'
    }
  }



  dependencies {
    ........
    compile "com.google.firebase:firebase-messaging:9.0.2"
  
  }
  apply plugin: 'com.google.gms.google-services'

  ```

 Build and run your application.

### iOS

For running the iOS application got to **platforms -> ios** and open **yourApp.xcworkspace** in the latest Xcode (8+)

Follow the steps to complete the building of iOS App,

1. Change the *Bundle Identifier* and *Signing credentials*
2. Go to the *AppDelegate.m* file and add the following snippets

    Add the **#import "yourApp-swift.h"**

#### Objective-C:

   ```
   // Register device token with Bluemix Push Notification Service
   - (void)application:(UIApplication *)application
  didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken{

     [[CDVBMSPush sharedInstance] didRegisterForRemoteNotifications:deviceToken];
  }

  // Handle error when failed to register device token with APNs
  - (void)application:(UIApplication*)application
  didFailToRegisterForRemoteNotificationsWithError:(NSError*)error {

    [[CDVBMSPush sharedInstance] didFailToRegisterForRemoteNotifications:error];
  }

  // Handle receiving a remote notification
  -(void)application:(UIApplication *)application
  didReceiveRemoteNotification:(NSDictionary *)userInfo
  fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {

    [[CDVBMSPush sharedInstance] didReceiveRemoteNotification:userInfo];
  }
  ```

#### Swift:

  ```
   // Register device token with Bluemix Push Notification Service
   func application(application: UIApplication,
   	didRegisterForRemoteNotificationsWithDeviceToken deviceToken: NSData) {

   	CDVBMSPush.sharedInstance().didRegisterForRemoteNotificationsWithDeviceToken(deviceToken)
   }

   // Handle error when failed to register device token with APNs
   func application(application: UIApplication,
   	didFailToRegisterForRemoteNotificationsWithError error: NSErrorPointer) {

   	CDVBMSPush.sharedInstance().didReceiveRemoteNotificationWithNotification(error)
   }

   // Handle receiving a remote notification
   func application(application: UIApplication,
   	didReceiveRemoteNotification userInfo: [NSObject : AnyObject], 	fetchCompletionHandler completionHandler: ) {

   	CDVBMSPush.sharedInstance().didReceiveRemoteNotificationWithNotification(userInfo)
   }

   // Handle receiving a remote notification on launch
   func application(application: UIApplication, didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {
     let remoteNotif = launchOptions?[UIApplicationLaunchOptionsKey.remoteNotification] as? NSDictionary

     if remoteNotif != nil {
       CDVBMSPush.sharedInstance().didReceiveRemoteNotificationOnLaunchWithLaunchOptions(launchOptions)
     }
   }
   ```
  You can follow the this [README](https://github.com/ibm-bluemix-mobile-services/bms-clientsdk-cordova-plugin-push/blob/master/README.md) to setup **bms-push**.

3. You have to set the **Swift Legacy** to **yes** in your `application` and in the `pod frameworks (BMSPush, BMSAnalytics, BMSAnalyticsAPI, BMSCore and BMSSecurity)`.

4. Clean and build the application.
5. Run the application.

## Example App

1. Add `Android` and `iOS` platforms.

```  
 ionic cordova platform add ios
 ionic cordova platform add android
```

2. Add the <strong>bms-push</strong> plugin to the project

  ```
  cordova cordova plugin add bms-push
  ```

  It will add `bms-push` and `bms-core` plugins to your app
  
3. Edit the [**app.module.ts**](https://github.com/ibm-bluemix-push-notifications/Ionic3_Hellopush/blob/master/hello_push/src/app/app.module.ts) file with your `APPGUID`,`ClientSecret` and `App Region`. 

4. Do `ionic cordova prepare` and `ionic cordova build`

5. To run the iOS app got to **platforms -> ios** open in Xcode , build and Run the app.

6. To run the android app got to **platforms -> android** open in Android Studio , build and Run the app.


>**Note**: In the Android manifest file locate `android:launchMode="singleTop"` and replace it with `android:launchMode="singleTask"` to stop restarting the app each time you open the app from notification click.

## Copyright 2016-17 IBM Corp.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
