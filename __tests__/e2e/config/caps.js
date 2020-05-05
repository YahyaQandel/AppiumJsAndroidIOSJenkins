const {resolve} = require("path");
const path = require("path");
var appDir = path.dirname(require.main.filename);
exports.android = {
    'appium-version': "1.17.0",
    platformName: "Android",
    platformVersion: "9.0",
    deviceName: "PixelX",
    autoGrantPermissions: "true",
    app: resolve("__tests__/apps/app-debug.apk")
  };
  exports.ios = {
    'appium-version': "1.17.0",
    platformName: "ios",
    deviceName: "iPhone 11",
    automationName: "XCUITest",
    autoGrantPermissions: "true",
    app: resolve(`__tests__/apps/Build/Products/Debug-iphonesimulator/AppiumJsAndroidIOSJenkins.app`)

  };

  // Add your real device here
  exports.realDevice = {
    'appium-version': "1.17.0",
    platformName: "Android",
    platformVersion: "8.0",
    deviceName: "REAL_DEVICE_NAME",
    autoGrantPermissions: "true",
    appPackage: "uk.devwork.pathfinder",
    appActivity: ".MainActivity"
  };