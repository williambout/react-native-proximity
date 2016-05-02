'use strict';

var React = require('react-native');

var { DeviceEventEmitter, NativeModules } = React;

module.exports = {
  addListener: function(callback) {
    NativeModules.RNProximity.proximityEnabled(true);
    return DeviceEventEmitter.addListener(
      'proximityStateDidChange', callback
    );
  },
  removeListener: function(listener) {
    NativeModules.RNProximity.proximityEnabled(false);
    DeviceEventEmitter.removeAllListeners(
      'proximityStateDidChange', listener
    );
  }
}
