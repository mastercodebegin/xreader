//@ts-nocheck
import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { DocumentView, RNPdftron } from "react-native-pdftron";
import DocumentPicker from 'react-native-document-picker';
import { CardViewer } from '../../component/CardView';
import { scaledSize } from '../../helper/util/Utilities';
export const CardViewerPage = (props: any) => {

    const openFile = async (value:any) => {
        try {
            const res = await DocumentPicker.pick({
                type: [value == 0 ?  DocumentPicker.types.docx : value == 1 ? DocumentPicker.types.pdf : value == 2 ? DocumentPicker.types.xlsx : value == 3  ? DocumentPicker.types.ppt   :  DocumentPicker.types.allFiles]
            });
            console.log(res, '------------------');
            const data = { uri: res[0]?.uri, cache: true }
            props.navigation.navigate('AllDocumentView', { source: res[0]?.uri })
            //setSource(res[0]?.uri);
            // setImage(encoded)
            // await FileViewer.open(res[0]?.uri).then(()=>{console.log('sucesss')
            // }
            // 	).catch((err)=>console.log('Error',err)
            // 	);
        }
        catch (e) {
            alert('No file Selected')
        }
    }
    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center', fontSize: scaledSize(40), marginTop: scaledSize(10), fontWeight: 'bold', fontStyle: 'italic' }}>Filess</Text>
            <CardViewer onClick={openFile} />
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fae6d9',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});