import React from 'react'
import Navigations from './src/navigation/Navigations'
import { Provider } from 'react-redux'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Store from './src/context/store/Store'
import Stepper from './src/helper/util/Stepper'
import DropDown from './src/component/DropDown'
import Rating from './src/helper/util/Rating'
import Chat from './src/helper/util/Chat'
import Pdf from 'react-native-pdf';
const source = { uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true };
export default App = () => {
  return (
    // <Dashboard/>
    <Provider store={Store}>
      {/* <Navigations/> */}
      <View style={styles.container}>
        <Pdf
        trustAllCerts={false}
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={(error) => {
            console.log(error);
          }}
          onPressLink={(uri) => {
            console.log(`Link pressed: ${uri}`);
          }}
          style={styles.pdf} />
      </View>
    </Provider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});