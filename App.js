import React, { useEffect, useState } from 'react'
import Navigations from './src/navigation/Navigations'
import { Provider } from 'react-redux'
import { View, Text, StyleSheet, Dimensions, Platform, Alert, Permission, NativeModule, BackHandler, PermissionsAndroid } from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import Store from './src/context/store/Store'
import Stepper from './src/helper/util/Stepper'
import DropDown from './src/component/DropDown'
import Rating from './src/helper/util/Rating'
import Chat from './src/helper/util/Chat'
import Pdf from 'react-native-pdf';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-paper'
import { PdfViewer } from './src/component/PdfViewer';
import { DocumentView, RNPdftron } from "react-native-pdftron";
import { AllDocViewer } from './src/component/AllDocumentViewer';
import { CardViewer } from './src/component/CardView';
import StackNavigator from './src/navigation/StackNavigator';
var RNFS = require('react-native-fs');
var SavePath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;

const path = "http://samples.leanpub.com/thereactnativebook-sample.pdf";
export default App = () => {
  //const [source, setSource] = React.useState(path);
  const [os, setOs] = useState(Platform.OS == 'ios' ? false : true)
  useEffect(() => {
    RNPdftron.initialize("Insert commercial license key here after purchase");
    RNPdftron.enableJavaScript(true);
    if (Platform.OS === 'android') {
      requestStoragePermission();
    }
  }, [])

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setOs(true)
        console.log("Storage permission granted");
      } else {
        setOs(false)
        console.log("Storage permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  


  return (
    <NavigationContainer>	
      <StackNavigator/>
    </NavigationContainer>	
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