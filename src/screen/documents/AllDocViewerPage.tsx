//@ts-nocheck
import React, { useEffect } from 'react'
import { Platform } from 'react-native';
import { BackHandler } from 'react-native';
import { Alert } from 'react-native';
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import  { PdfViewer }  from '../../component/PdfViewer'
import { DocumentView, RNPdftron } from "react-native-pdftron";
import { AllDocViewer } from '../../component/AllDocumentViewer';
const path = "http://samples.leanpub.com/thereactnativebook-sample.pdf";
export const AllDocViewerPage = (props:any) => {
useEffect(()=>{
console.log(props)
},[])
    const onLeadingNavButtonPressed = () => {
        console.log("leading nav button pressed");
        if (Platform.OS === "ios") {
          Alert.alert(
            "App",
            "onLeadingNavButtonPressed",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }],
            { cancelable: true }
          );
        } else {
          props.navigation.goBack()
        }
      };
  return (
   <>
      {/* <AllDocViewer
      document={props.route.params.source}
      showLeadingNavButton={true}
      onLeadingNavButtonPressed={onLeadingNavButtonPressed}
      
      /> */}
      <PdfViewer data={props.route.params.source}/>
    </>)}
   
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