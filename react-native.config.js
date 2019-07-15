const path = require('path')

module.exports = {
  dependency: {
    platforms: {
      ios: {
        podspecPath: path.join(__dirname, 'react-native-proximity.podspec'),
      },
      // android: {
      //   packageImportPath: 'import io.invertase.firebase.RNFirebasePackage;',
      //   packageInstance: 'new RNFirebasePackage()',
      // },
    },
  },
}
