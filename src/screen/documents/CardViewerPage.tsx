//@ts-nocheck
import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import DocumentPicker from 'react-native-document-picker';
import { CardViewer } from '../../component/CardView';
import { scaledSize } from '../../helper/util/Utilities';
import { removePdfPassword } from 'remove-pdf-password'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob';
import { AppBG } from '../../utilies/GlobalImages';
export const CardViewerPage = (props: any) => {
    const openFile = async (value: any) => {
        try {
            const res = await DocumentPicker.pick({
                type: [value == 0 ? DocumentPicker.types.docx : value == 1 ? DocumentPicker.types.pdf : value == 2 ? DocumentPicker.types.xlsx : value == 3 ? DocumentPicker.types.ppt : value == 4 ? DocumentPicker.types.video : value == 5 ? DocumentPicker.types.images : DocumentPicker.types.allFiles]
            });
            console.log(res, '------------------');
            const data = { uri: res[0]?.uri, cache: true }
            props.navigation.navigate('AllDocumentView', { source: res[0]?.uri,props:props })
            //setSource(res[0]?.uri);
            // setImage(encoded)
            // await FileViewer.open(res[0]?.uri).then(()=>{console.log('sucesss')
            // }
            // 	).catch((err)=>console.log('Error',err)
            // 	);
        }
        catch (e) {
            // alert('No file Selected')
        }
    }
    return (
        <ImageBackground
        source={AppBG}
        style={{width:'100%',height:'100%'}}>
        <View style={[styles.container,]}>
            <View style={{flex:.5,flexDirection:'row',}}>
<View style={{flex:.5,}}>

</View>
<View style={{flex:.5,}}>

</View>

            </View>
            {/* <View style={{ flex:1,}}> */}
            
            <View style={{flex:.6,alignItems:'center',justifyContent:'center'}}>

            <CardViewer onClick={openFile} />
            </View>
            <View style={{flex:.22,alignItems:'center'}}>

                <BannerAd
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
                />
                </View>
            <View style={{height:80,}}></View>
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