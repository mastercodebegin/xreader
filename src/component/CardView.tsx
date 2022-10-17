//@ts-nocheck
import { AdEventType, RewardedAdEventType } from '@react-native-firebase/admob';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { scaledSize } from '../helper/util/Utilities';
import { FONTS } from '../utilies/GlobalFonts'
import { Pdf1, Pdf2, Pdf3 } from '../utilies/GlobalImages';
import { rewardInterstitialAd } from './Admob';

const images = [
    { image: Pdf1, name: 'doc', count: 0, id: 1 },
    { image: Pdf2, name: 'pdf', count: 0, id: 2 },
    { image: Pdf1, name: 'excel', count: 0, id: 3 },
    { image: Pdf2, name: 'ppt', count: 0, id: 4 }
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

    const _renderItem = ({ item, index }) => (
        <TouchableOpacity key={index} style={{alignSelf:'center',flex:1,justifyContent:'center',marginTop:scaledSize(0)}} onPress={() => {
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
            <Image
                source={item?.image}
                style={styles.pdf}
                resizeMode="cover"
            />
            {/* <Text style={{ textAlign: 'center', marginBottom: scaledSize(15), color: 'grey', fontSize: 13, fontFamily: FONTS.MerriweatherRegular, top: scaledSize(-5) }}>{item?.name}</Text> */}
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, marginTop: scaledSize(5), width: '100%', marginLeft: scaledSize(0),marginBottom:scaledSize(70) }}>
            <FlatList
                keyExtractor={(index) => index.toString()}
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: scaledSize(25),
    },
    row: {
        flex: 1,
        justifyContent: "space-around"
    },
    pdf: {
        height: scaledSize(115),
        width: scaledSize(175),
        alignSelf: 'center',
        borderRadius: scaledSize(10),
        margin: scaledSize(10),
        //backgroundColor:'#f2f5ff'
        //margin: scaledSize(20)
    }
});