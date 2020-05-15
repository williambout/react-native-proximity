import {
  DeviceEventEmitter,
  NativeModules,
  Platform,
} from 'react-native';

const { RNProximity } = NativeModules;

let addListener = null;
let removeListener = null;

if (Platform.OS === 'ios') {
  addListener = function(callback) {
    RNProximity.proximityEnabled(true);
    return DeviceEventEmitter.addListener(
      'proximityStateDidChange', callback
    );
  },
  removeListener = function(listener) {
    RNProximity.proximityEnabled(false);
    DeviceEventEmitter.removeAllListeners(
      'proximityStateDidChange', listener
    );
  }
} else if (Platform.OS == 'android') {
  addListener = (callback) => {
    nativeModule.addListener();
    DeviceEventEmitter.addListener(nativeModule.EVENT_ON_SENSOR_CHANGE, e => callback(e));
  };
  removeListener = (listener) => {
    nativeModule.removeListener();
    DeviceEventEmitter.removeAllListeners(nativeModule.EVENT_ON_SENSOR_CHANGE, listener);
  };
}

module.exports = {
  addListener,
  removeListener,
};
