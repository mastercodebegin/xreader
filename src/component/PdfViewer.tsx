//@ts-nocheck
import { StackActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert, Modal, TouchableOpacity, TextInput, Linking } from 'react-native'
import Pdf from 'react-native-pdf';
import { scaledSize } from '../helper/util/Utilities';
import RNFetchBlob from 'rn-fetch-blob';
import RNShareFile from 'react-native-share-pdf';
import Share from 'react-native-share';
import { deviceBasedDynamicDimension } from '../helper/util/scale';
import { COLORS } from "../utilies/GlobalColors";
import ModalView from './modalView';
import CustomeButton from './CustomeButton';
import { Button } from 'react-native-elements';
export const PdfViewer = (props: any) => {
  const [text, setText] = useState('')
  const [num, setNumber] = useState(0)
  const [visible, setVisible] = useState(false)
  const [source, setSource] = React.useState({ uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true });
  useEffect(() => {
    console.log("PdfViewer >>>>>>>>>>>>>>>>>>",props);
    
    // setVisible(false)
    // setNumber(0)
  }, [])
  const onAndroidSharePress = async () => { 
    RNFetchBlob.fs
    .readFile(props?.data, 'base64')
    .then(async (data) => {
      Share.open({
        filename:'PdfName',
        url:'data:application/pdf;base64,' + data
      })
    })
    .catch((err) => {}); }

  const add = (value: any) => {
    setText(value.replace(/[^a-zA-Z0-9 ]/g, "").replace(" ", ""))
  }
  return (
    <>
      <View style={styles.container}>
        {!visible ?
          <Pdf
            trustAllCerts={false}
            password={text}
            onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
            }}
            source={source}
            onError={(error) => {
              setTimeout(() => {
                setVisible(true)
              }, 380);

              // setNumber((prev) => prev + 1)
              // console.log(error, num, text, 'error')
              // Alert.alert(
              //   `Password Required!`,
              //   "",
              //   [
              //     { text: "Enter Password", onPress: () => { setVisible(true) } },
              //     { text: "Cancel", onPress: () => { props.navigation.navigation.goBack() } }
              //   ]
              // );
            }
            }
            // onPressLink={(uri) => {
            //   console.log(`Link pressed: ${uri}`);
            // }}
            style={styles.pdf} />

          :
          <ModalView
            visible={visible}
            text={text}
            onText={add}
            num={num}
            onOpen={() => text.length > 0 && setVisible(false)}
            onClose={() => {
              setNumber(0), setVisible(false),
                props.navigation.navigation.goBack()
            }}
            close={'CLOSE'}
            open={'OPEN'} />
        }
        <Button onPress={() => onAndroidSharePress()} containerStyle={{ width: scaledSize(100), height: scaledSize(80), top: scaledSize(10) }} title={'Share'} />
      </View>
    </>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: scaledSize(25),
    //marginBottom:150
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});