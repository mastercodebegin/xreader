import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Platform, Alert, Permission, NativeModule, BackHandler, PermissionsAndroid } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { InitialListner } from './src/component/Admob'
import StackNavigator from './src/navigation/StackNavigator';
const path = "http://samples.leanpub.com/thereactnativebook-sample.pdf";
export default App = () => {
  //const [source, setSource] = React.useState(path);
  const [os, setOs] = useState(Platform.OS == 'ios' ? false : true)
  useEffect(() => {
    setInterval(async() => {
    InitialListner()
    },1000)
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