//@ts-nocheck
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
//import { DocumentView, RNPdftron } from "react-native-pdftron";
export const AllDocViewer = (props:any) => {
  return (
   <>
      {/* <DocumentView
        document={props.document}
        showLeadingNavButton={props.showLeadingNavButton}
        leadingNavButtonIcon={
          Platform.OS === "ios"
            ? "ic_close_black_24px.png"
            : "ic_close_black_24px.png"
        }
        onLeadingNavButtonPressed={props.onLeadingNavButtonPressed}
      /> */}
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