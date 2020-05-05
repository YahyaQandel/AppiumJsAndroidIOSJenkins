require("colors");
const webDriver = require("wd");
const platformName = process.env.PLATFORM || 'android';
const PLATFORMS = {
    android:"android",
    ios:'ios'
}
const emulatorConfiguration = require("./caps")[PLATFORMS[platformName]];
const expect = require("chai").expect;
const chai = require('chai');
const {assert} = chai;
const asserts = webDriver.asserters;
const emulatorDriver = webDriver.promiseChainRemote({
    host: "localhost",
    port: 4723
});
const DEFAULT_WAIT_TIME = 20000;
const SHORT_TIME = 1000;
require("./logging").configure(emulatorDriver);


module.exports = {
    webDriver,
    emulatorDriver,
    expect,
    emulatorConfiguration,
    assert
};