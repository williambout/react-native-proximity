#react-native-proximity

A React Native wrapper that provides access to the state of the proximity sensor.

![](https://github.com/williambout/react-native-proximity/raw/master/demo.gif)

*Usage of react-native-proximity and scrollview.*

##Getting Started

- Install the library 
```shell
npm install --save react-native-proximity
```
- Link the library 
```shell
react-native link
```

##Usage

Import the library

```javascript
import Proximity from 'react-native-proximity';
```

###addListener(callback)

```javascript
componentDidMount(){
 Proximity.addListener(this._setProximity);
},

/**
 * State of proximity sensor
 * @param {object} data
 */
 _setProximity(data) {
   this.setState({
     proximity: data.proximity,
   });
 },
```

###removeListener(callback)

```javascript
componentWillUnmount() {
  Proximity.removeListener(this._setProximity);
},
```
