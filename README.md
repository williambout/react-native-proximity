[![npm version](https://badge.fury.io/js/react-native-proximity.svg)](https://badge.fury.io/js/react-native-proximity)

# react-native-proximity

A React Native wrapper that provides access to the state of the proximity sensor for iOS and Android.

![](https://github.com/williambout/react-native-proximity/raw/master/demo.gif)

*Usage of react-native-proximity and scrollview.*

## Getting Started

- Install the library 
```shell
npm install --save react-native-proximity
```
- Link the library 
```shell
react-native link react-native-proximity
```

## Usage

Import the library

```javascript
import Proximity from 'react-native-proximity';
```

### addListener(callback)
The callback function returns an object with *proximity* and *distance* properties. If *proximity* is true, it means the device is close to an physical object. *distance* is only supported in Android.
```javascript
componentDidMount(){
 Proximity.addListener(this._proximityListener);
},

/**
 * State of proximity sensor
 * @param {object} data
 */
 _proximityListener(data) {
   this.setState({
     proximity: data.proximity,
     distance: data.distance // Android-only 
   });
 },
```

### removeListener(callback)

```javascript
componentWillUnmount() {
  Proximity.removeListener(this._proximityListener);
},
```
