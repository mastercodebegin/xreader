import React from 'react'
import Navigations from './src/navigation/Navigations'
import { Provider } from 'react-redux'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import Store from './src/context/store/Store'
import Stepper from './src/helper/util/Stepper'
import DropDown from './src/component/DropDown'
import Rating from './src/helper/util/Rating'
import Chat from './src/helper/util/Chat'
import Pdf from 'react-native-pdf';
import { Button } from 'react-native-paper'
import PdfViewer from './src/component/PdfViewer';
export default App = () => {
  const [source,setSource] =  React.useState({uri:'', cache: true });

  const openFile = async () => {

		try {
			const res = await DocumentPicker.pick({
				type: [DocumentPicker.types.allFiles]
				
			});
			console.log(res,'------------------');
      const data ={uri:res[0]?.uri,cache: true}
			setSource(data);

			// setImage(encoded)
			// await FileViewer.open(res[0]?.uri).then(()=>{console.log('sucesss')
    // }
		// 	).catch((err)=>console.log('Error',err)
		// 	);
		}
		catch (e) {
console.log('error==============>',e);
		}
	}


  return (
   <>
    <Button onPress={()=>openFile()}>Open file</Button>
    <PdfViewer data={source}/>
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