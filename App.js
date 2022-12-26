import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Platform, Alert, Permission, NativeModule, BackHandler, PermissionsAndroid } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { InitialListner } from './src/component/Admob'
import StackNavigator from './src/navigation/StackNavigator';
import { CardViewerPage } from './src/screen/documents/CardViewerPage';
import { PdfViewer } from './src/component/PdfViewer';
const path = "http://samples.leanpub.com/thereactnativebook-sample.pdf";
import DocumentPicker from 'react-native-document-picker';

export default App = () => {
  //const [source, setSource] = React.useState(path);
  // const [os, setOs] = useState(Platform.OS == 'ios' ? false : true)
  const [os, setOs] = useState( false)
  useEffect(() => {
    // setInterval(async() => {
    // InitialListner()
    // },1000)
    if (Platform.OS === 'android') {
      requestStoragePermission();
    }
    if(os)
    {    openFile()
    }
  }, )

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

  openFile =async()=>{
    console.log("openFile");

    try{
    const response = await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
    });
    console.log("response>>>>>>>>",response);
  }
  catch(e)
  {
    console.log('error>>>',e);
  }
  }


  return (
    <NavigationContainer>	
      {/* <CardViewerPage/> */}
      {/* <StackNavigator/> */}
      <PdfViewer/>
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