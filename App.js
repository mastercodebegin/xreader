import React from 'react'
import Navigations from './src/navigation/Navigations'
import { Provider } from 'react-redux'
import { View, Text, StyleSheet, Dimensions, Platform, Alert } from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import Store from './src/context/store/Store'
import Stepper from './src/helper/util/Stepper'
import DropDown from './src/component/DropDown'
import Rating from './src/helper/util/Rating'
import Chat from './src/helper/util/Chat'
import Pdf from 'react-native-pdf';
import { Button } from 'react-native-paper'
import OpenFile from 'react-native-doc-viewer';
import { PdfViewer } from './src/component/PdfViewer';
var RNFS = require('react-native-fs');
var SavePath = Platform.OS === 'ios' ? RNFS.MainBundlePath : RNFS.DocumentDirectoryPath;
export default App = () => {
  const [source, setSource] = React.useState({ uri: '', cache: true });
  const openFile = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles]

      });
      console.log(res, '------------------');
      const data = { uri: res[0]?.uri, cache: true }
      setSource(data);

      // setImage(encoded)
      // await FileViewer.open(res[0]?.uri).then(()=>{console.log('sucesss')
      // }
      // 	).catch((err)=>console.log('Error',err)
      // 	);
    }
    catch (e) {
      console.log('error==============>', e);
    }
  }


  const handlePressLocalFile = () => {
    if (Platform.OS === 'ios') {
      OpenFile.openDoc([{
        url: SavePath + "filename.pdf",
        fileNameOptional: "sample"
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    } else {
      //Android all files reader
      OpenFile.openDoc([{
        //xl url
        url:"https://www3.online-convert.com/dl/web8/download-file/1c06a811-ca54-446b-99c2-1abbd5ab634c/B_B-Wordings-_1_.xlsx",
        
        //pdf url
        //url:"http://samples.leanpub.com/thereactnativebook-sample.pdf",

        //jpg url
        //url:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",

        //docx || doc url
        //url: "https://dw.convertfiles.com/files/0376115001662463986/release%20note%20_%20client%20_%2014_04_2022.doc",

        fileName: "sample",
        cache: true
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    }
  }

  const handleJpgFile = () => {
    if (Platform.OS === 'ios') {
      OpenFile.openDoc([{
        url: SavePath + "filename.pdf",
        fileNameOptional: "sample"
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    } else {
      //Android all files reader
      OpenFile.openDoc([{
        url:"https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg",
        fileName: "sample",
        cache: true
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    }
  }

  const handlePdfFile = () => {
    if (Platform.OS === 'ios') {
      OpenFile.openDoc([{
        url: SavePath + "filename.pdf",
        fileNameOptional: "sample"
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    } else {
      //Android all files reader
      OpenFile.openDoc([{
        url:"http://samples.leanpub.com/thereactnativebook-sample.pdf",
        fileName: "sample",
        cache: true
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    }
  }

  const handleDocFile = () => {
    if (Platform.OS === 'ios') {
      OpenFile.openDoc([{
        url: SavePath + "filename.pdf",
        fileNameOptional: "sample"
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    } else {
      //Android all files reader
      OpenFile.openDoc([{
        //docx || doc url
        url: "https://dw.convertfiles.com/files/0376115001662463986/release%20note%20_%20client%20_%2014_04_2022.doc",

        fileName: "sample",
        cache: true
      }], (error, url) => {
        if (error) {
          console.error(error);
        } else {
          console.log(url)
        }
      })
    }
  }

  return (
    <>
      {/* <Button onPress={() => openFile()}>Open file</Button> */}
      <Button
        onPress={() => handlePressLocalFile()}
        title="Press Me Open BinaryinUrl"
        accessibilityLabel="See a Document"
      >
        Excel File
      </Button>

      <Button
        onPress={() => handleJpgFile()}
        title="Press Me Open BinaryinUrl"
        accessibilityLabel="See a Document"
      >
        Jpg File
      </Button>

      <Button
        onPress={() => handlePdfFile()}
        title="Press Me Open BinaryinUrl"
        accessibilityLabel="See a Document"
      >
        Pdf File
      </Button>

      <Button
        onPress={() => handleDocFile()}
        title="Press Me Open BinaryinUrl"
        accessibilityLabel="See a Document"
      >
        Docx File
      </Button>
      <PdfViewer data={source} />
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