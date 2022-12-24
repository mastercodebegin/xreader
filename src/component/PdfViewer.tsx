//@ts-nocheck
import { StackActions } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Alert, Modal, TouchableOpacity, TextInput } from 'react-native'
import Pdf from 'react-native-pdf';
import { scaledSize } from '../helper/util/Utilities';
import { deviceBasedDynamicDimension } from '../helper/util/scale';
import { COLORS } from "../utilies/GlobalColors";
import ModalView from './modalView';
export const PdfViewer = (props: any) => {
  const [text, setText] = useState('')
  const [num, setNumber] = useState(0)
  const [visible, setVisible] = useState(false)
  const [source, setSource] = React.useState({ uri: 'http://samples.leanpub.com/thereactnativebook-sample.pdf', cache: true });
  useEffect(() => {
    setVisible(false)
    setNumber(0)
  }, [])

  const add = (value:any)=>{
    setText(value.replace(/[^a-zA-Z0-9 ]/g, "").replace(" ", ""))
  }
  return (
    <>
      <View style={styles.container}>
       
          <Pdf
            trustAllCerts={false}
            password={text}
            onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
            }}
            source={source }
            onError={(error) => {
              setTimeout(() => {
                setVisible(true)
              }, 380);

              setNumber((prev) => prev + 1)
              console.log(error, num, text, 'error')
             
            }
            }
            onPressLink={(uri) => {
              console.log(`Link pressed: ${uri}`);
            }}
            style={styles.pdf} />
        
          
      </View>
    </>)
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