//@ts-nocheck
import { AdEventType, RewardedAdEventType } from '@react-native-firebase/admob';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import { scaledSize } from '../helper/util/Utilities';
import { FONTS } from '../utilies/GlobalFonts'
import { PowerpointBG,PdfBG,PdfIcon,WordBG,ExcelBG,WordIcon,ExcelIcon,AcrobatIcon,PowerpointIcon, Images} from '../utilies/GlobalImages';
import { rewardInterstitialAd } from './Admob';

const images = [
    { image: PdfBG,icon:PdfIcon, name: 'doc', count: 0, id: 1 },
    { image: WordBG, icon:WordIcon,name: 'pdf', count: 0, id: 2 },
    { image: ExcelBG, icon:ExcelIcon,name: 'excel', count: 0, id: 3 },
    { image: PowerpointBG, icon:PowerpointIcon,name: 'ppt', count: 0, id: 4 },
    { image: AcrobatIcon, icon:AcrobatIcon,name: 'images', count: 0, id: 5 },
    { image: WordBG, icon:Images,name: 'images', count: 0, id: 6 }
];
export const CardViewer = (props: any) => {
    const [data, setData] = useState(images)
    const [rewardedAdLoaded, setRewardedAdLoaded] = React.useState(false);
    useEffect(() => {
        let value = [...images]
        const eventListener = rewardInterstitialAd.onAdEvent(async (type, error, reward) => {
            if (type === RewardedAdEventType.LOADED) {
                setRewardedAdLoaded(true);
            }
            if (type === RewardedAdEventType.EARNED_REWARD) {
                console.log("rewarded with=================================================", reward);
                value.map((int: any) => {
                    return int.count = 0
                })
                setData(value)
            }
            if (type === AdEventType.OPENED) {
                setRewardedAdLoaded(false);
            }
            if (type === AdEventType.CLOSED) {
                setRewardedAdLoaded(false);
                rewardInterstitialAd.load();
            }
        });

        // Start loading the rewarded ad straight away
        if (rewardInterstitialAd.loaded) {
            setRewardedAdLoaded(true);
        } else {
            rewardInterstitialAd.load();
        }

        // Unsubscribe from events on unmount
        return () => {
            eventListener();
        };
    }, [])

    const _renderItem = ({ item, index }) => {
        return <View style={{flex:1,justifyContent:'flex-end',
        alignItems:'center',marginTop:scaledSize(10)}}>
        <TouchableOpacity key={index} style={{alignSelf:'center',}} onPress={() => {
            let value = [...images]
            if (item.count < 4) {
                value.map((int) => {
                    if (int.id == item.id) {
                        return int.count = item.count + 1
                    }
                })
                setData(value)
                props.onClick(index)
            }
            else {
                rewardInterstitialAd.show();
            }
        }}>

           {/* <Text>{item.name}</Text> */}
            <ImageBackground
                source={item?.image}
                style={[styles.pdf,{
               }]}
                resizeMode="cover"
            >
                <Image
                source={item?.icon}
                style={[styles.pdf,{alignSelf:'center',height:item?.id==1?'60%':'70%'}]}
                resizeMode="center"
            />

            </ImageBackground>
            {/* <Text style={{ textAlign: 'center', marginBottom: scaledSize(15), color: 'grey', fontSize: 13, fontFamily: FONTS.MerriweatherRegular, top: scaledSize(-5) }}>{item?.name}</Text> */}
        </TouchableOpacity>
        </View>
       
    };
    return (
        <View style={{ flex: 1, marginTop: scaledSize(5), width: '100%', marginLeft: scaledSize(0), }}>
            <FlatList
                keyExtractor={(index) => index?.id?.toString()}
                data={data}
                numColumns={2}
                renderItem={_renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // marginTop: scaledSize(25),
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    pdf: {
        height: scaledSize(110),
        width: scaledSize(175),
        alignSelf: 'center',
        borderRadius: scaledSize(8),
        overflow:'hidden',
        justifyContent:'center',
        alignItems:'center'
        
    }
});