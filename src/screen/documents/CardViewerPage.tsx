//@ts-nocheck
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import { CardViewer } from '../../component/CardView';
import { scaledSize } from '../../helper/util/Utilities';
import { removePdfPassword } from 'remove-pdf-password'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import RNImageToPdf from 'react-native-image-to-pdf';
import { AppBG, BGImage } from '../../utilies/GlobalImages';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InitialListner, interstitialAd } from '../../component/Admob';
export const CardViewerPage = (props: any) => {
     const [photoArray, setPhotoArray] = useState(0)
    useEffect(() => {
        // (async () => {
        //     setInterval(async() => {
        //     const res = await AsyncStorage.getItem('Adds')
        //     const value = res && JSON.parse(res)
        //     console.log(value)
        //     setPhotoArray(value)
        //     },1000)
        // })()
        console.log(' CardViewerPage >>>>>>>>>>>');
        
    }, [])
    const openFile = async (value: any) => {
        // alert("hi")
        console.log("value openfile>>>>>>>>>>>>>>>>>>>",value);
        console.log("value openfile>>>>>>>>>>>>>>>>>>>",props);
        
        try {
            // if (value == 5) {
                console.log("Select file>>>>>>>>>>>>>");
                
                // const res = await DocumentPicker.pickMultiple({
                    // type: [DocumentPicker.types.allFiles]
                    const response = await DocumentPicker.pick({
                        presentationStyle: 'fullScreen',
                      });
                      
                // });
                // let arr = []
                // res.map((item) => {
                //     let obj = item.uri
                //     arr.push(obj)
                // })
                console.log(arr, res, '------------------');
                // try {
                //     const options = {
                //         imagePaths: arr,
                //         name: 'PdfName',
                //         maxSize: { // optional maximum image dimension - larger images will be resized
                //             width: 900,
                //             height: Math.round(Dimensions.get('window').height / Dimensions.get('window').width * 900),
                //         },
                //         quality: .7, // optional compression paramter
                //     };
                //     // const pdf = await RNImageToPdf.createPDFbyImages(options);
                //     // props.navigation.navigate('AllDocumentView', { source: pdf.filePath, props: props })
                //     console.log(pdf.filePath, 'pdf path');
                // } catch (e) {
                //     console.log(e);
                // }
            // }
            // else {
            //     console.log(">>>>>>>>>>>>>>>> else");
                
               

            //         const res = await DocumentPicker.pick({
                
            //         // type: [value == 0 ? DocumentPicker.types.pdf : value == 1 ? DocumentPicker.types.docx : value == 2 ? DocumentPicker.types.xlsx : value == 3 ? DocumentPicker.types.ppt : value == 4 ? DocumentPicker.types.pdf : value == 5 ? DocumentPicker.types.images : DocumentPicker.types.allFiles]
            //     });
            //     console.log(res, value, '------------------');
                // const data = { uri: res[0]?.uri, cache: true }
                // props.navigation.navigate('AllDocumentView', { source: res[0]?.uri, props: props })
                //setSource(res[0]?.uri);
                // setImage(encoded)
                // await FileViewer.open(res[0]?.uri).then(()=>{console.log('sucesss')
                // }
                // 	).catch((err)=>console.log('Error',err)
                // 	);
            // }
        }
        catch (e) {
            console.log("error>>>>>>>>>>>>",e);
            
            // alert('No file Selected')
        }
    }
    return (
        <ImageBackground
            source={BGImage}
            style={{ width: '100%', height: '100%' }}>
            <View style={[styles.container,]}>
                <Text style={{ textAlign: 'center', top: scaledSize(20), fontSize: 18 }}>{`Add ${photoArray ? photoArray : 0 }/5`}</Text>
                <View style={{ flex: .5, flexDirection: 'row', }}>
                    <View style={{ flex: .5, }}>

                    </View>
                    <View style={{ flex: .5, }}>

                    </View>

                </View>
                {/* <View style={{ flex:1,}}> */}

                <View style={{ flex: .6, alignItems: 'center', justifyContent: 'center' }}>
<TouchableOpacity onPress={()=>openFile(5)}>
<Text>Press</Text>
</TouchableOpacity>
                    {/* <CardViewer onClick={openFile} /> */}
                </View>
                <View style={{ flex: .22, alignItems: 'center' }}>

                    {/* <BannerAd
                        unitId={TestIds.BANNER}
                        size={BannerAdSize.LARGE_BANNER}
                        requestOptions={{
                            requestNonPersonalizedAdsOnly: true,
                        }}
                        onAdLoaded={() => {
                            console.log('Advert loaded');
                        }}
                        onAdFailedToLoad={(error) => {
                            console.error('Advert failed to load: ', error);
                        }}
                    /> */}
                </View>
                <View style={{ height: 80, }}></View>
            </View>

            {/* </View> */}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        // justifyContent: 'center',
        //marginLeft: scaledSize(20),
        //marginRight: scaledSize(20)
        // alignItems: 'center'
    },
    viewBox: { elevation: 2, backgroundColor: '#694ff2', marginTop: scaledSize(15), borderRadius: 10 },
    textStyle: {
        fontSize: scaledSize(20), marginTop: scaledSize(30), fontStyle: 'normal', marginLeft: scaledSize(5)
    },
    textStyle2: {
        fontSize: scaledSize(30), marginTop: scaledSize(0), fontWeight: 'bold', fontStyle: 'normal', fontFamily: 'Merriweather-Italic', marginLeft: scaledSize(5), color: '#36276b'
    },
    textStyle3: {
        fontSize: scaledSize(25), marginTop: scaledSize(10), fontWeight: 'bold', fontStyle: 'normal', fontFamily: 'Merriweather-Italic', marginLeft: scaledSize(5), color: '#36276b'
    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});