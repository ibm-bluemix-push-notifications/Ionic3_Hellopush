cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/android/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "bms-core.BMSClient",
    "file": "plugins/bms-core/www/BMSClient.js",
    "pluginId": "bms-core",
    "clobbers": [
      "BMSClient"
    ]
  },
  {
    "id": "bms-core.BMSRequest",
    "file": "plugins/bms-core/www/BMSRequest.js",
    "pluginId": "bms-core",
    "clobbers": [
      "BMSRequest"
    ]
  },
  {
    "id": "bms-core.BMSLogger",
    "file": "plugins/bms-core/www/BMSLogger.js",
    "pluginId": "bms-core",
    "clobbers": [
      "BMSLogger"
    ]
  },
  {
    "id": "bms-core.BMSAnalytics",
    "file": "plugins/bms-core/www/BMSAnalytics.js",
    "pluginId": "bms-core",
    "clobbers": [
      "BMSAnalytics"
    ]
  },
  {
    "id": "bms-core.BMSAuthorizationManager",
    "file": "plugins/bms-core/www/BMSAuthorizationManager.js",
    "pluginId": "bms-core",
    "clobbers": [
      "BMSAuthorizationManager"
    ]
  },
  {
    "id": "bms-push.BMSPush",
    "file": "plugins/bms-push/www/BMSPush.js",
    "pluginId": "bms-push",
    "clobbers": [
      "BMSPush"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-whitelist": "1.3.1",
  "cordova-plugin-device": "1.1.4",
  "cordova-plugin-splashscreen": "4.0.3",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-cocoapod-support": "1.2.10",
  "cordova-plugin-add-swift-support": "1.7.0",
  "bms-core": "2.3.8",
  "bms-push": "3.2.3",
  "cordova-plugin-geolocation": "2.4.3"
};
// BOTTOM OF METADATA
});