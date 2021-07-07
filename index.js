'use strict';

import {
  DeviceEventEmitter,
  NativeModules,
  Platform,
} from 'react-native';

const nativeModule = NativeModules.RNProximity;

let addListener = null;
let removeListener = null;

// only for Android
let screenOnOff = false;
const enableScreenOnOff = function(value) {
  screenOnOff = value;
};

if (Platform.OS === 'ios') {
  addListener = function(callback) {
    NativeModules.RNProximity.proximityEnabled(true);
    return DeviceEventEmitter.addListener(
      'proximityStateDidChange', callback
    );
  },
  removeListener = function(listener) {
    NativeModules.RNProximity.proximityEnabled(false);
    DeviceEventEmitter.removeAllListeners(
      'proximityStateDidChange', listener
    );
  }
} else if (Platform.OS == 'android') {
  addListener = (callback) => {
    if (screenOnOff) {
      nativeModule.proximityEnabled(true);
    }
    nativeModule.addListener();
    DeviceEventEmitter.addListener(nativeModule.EVENT_ON_SENSOR_CHANGE, e => callback(e));
  };
  removeListener = (listener) => {
    if (screenOnOff) {
      nativeModule.proximityEnabled(false);
    }
    nativeModule.removeListener();
    DeviceEventEmitter.removeAllListeners(nativeModule.EVENT_ON_SENSOR_CHANGE, listener);
  };
}

module.exports = {
  addListener,
  removeListener,
  enableScreenOnOff
};
