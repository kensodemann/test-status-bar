import { Injectable } from '@angular/core';
import { cordova, cordovaPropertyGet, cordovaPropertySet, IonicNativePlugin } from '@ionic-native/core';

// The source for this is here: https://github.com/ionic-team/ionic-native/blob/master/src/%40ionic-native/plugins/status-bar/index.ts

// The compiled @ionic-native wrapper looks like this;
// import { __decorate, __extends } from "tslib";
// import { Injectable } from '@angular/core';
// import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
// var StatusBar = /** @class */ (function (_super) {
//     __extends(StatusBar, _super);
//     function StatusBar() {
//         return _super !== null && _super.apply(this, arguments) || this;
//     }
//     StatusBar.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
//     StatusBar.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
//     StatusBar.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
//     StatusBar.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
//     StatusBar.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
//     StatusBar.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
//     StatusBar.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
//     StatusBar.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
//     StatusBar.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
//     Object.defineProperty(StatusBar.prototype, "isVisible", {
//         get: function () { return cordovaPropertyGet(this, "isVisible"); },
//         set: function (value) { cordovaPropertySet(this, "isVisible", value); },
//         enumerable: true,
//         configurable: true
//     });
//     StatusBar.pluginName = "StatusBar";
//     StatusBar.plugin = "cordova-plugin-statusbar";
//     StatusBar.pluginRef = "StatusBar";
//     StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
//     StatusBar.platforms = ["Android", "iOS", "Windows"];
//     StatusBar = __decorate([
//         Injectable()
//     ], StatusBar);
//     return StatusBar;
// }(IonicNativePlugin));
// export { StatusBar };

// Basically, I suggest:
//  clone the @ionic-native project
//  create your custom plugin there
//  build it
//  have a look at the code generated in dist/@ionic-native/plugins/plugin-name/ngx
//  use that as a model to translate into TypeScript. It should be pretty easy to go from the above to the typescript...

// I only implemented what I cared about, but you should be able to easily see how things map
// The console logs are just in there to show that I am actually using _my_ service and not the default wrapper.

@Injectable({
  providedIn: 'root'
})
export class MyStatusBarService extends IonicNativePlugin {
  // StatusBar.pluginName = "StatusBar";
  // StatusBar.plugin = "cordova-plugin-statusbar";
  // StatusBar.pluginRef = "StatusBar";
  // StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
  // StatusBar.platforms = ["Android", "iOS", "Windows"];
  static pluginName = 'StatusBar';
  static plugin = 'cordova-plugin-statusbar';
  static pluginRef = 'StatusBar';
  static repo = 'https://github.com/apache/cordova-plugin-statusbar';
  static platforms = ['Android', 'iOS', 'Windows'];

  // Object.defineProperty(StatusBar.prototype, "isVisible", {
  //   get: function () { return cordovaPropertyGet(this, "isVisible"); },
  //   set: function (value) { cordovaPropertySet(this, "isVisible", value); },
  //   enumerable: true,
  //   configurable: true
  // });
  get isVisible(): boolean {
    console.log('using my get isVisible');
    return cordovaPropertyGet(this, 'isVisible');
  }

  set isVisible(value: boolean) {
    cordovaPropertySet(this, 'isVisible', value);
  }

  //     StatusBar.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
  hide() {
    console.log('using my hide');
    return cordova(this, 'hide', { sync: true }, arguments);
  }
  //     StatusBar.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
  show() {
    console.log('using my show');
    return cordova(this, 'show', { sync: true }, arguments);
  }

  // StatusBar.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
  // StatusBar.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
  // StatusBar.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
  // StatusBar.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
  // StatusBar.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
  // StatusBar.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
  // StatusBar.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
}
