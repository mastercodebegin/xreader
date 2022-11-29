//@ts-nocheck
import { AdEventType, RewardedAdEventType } from '@react-native-firebase/admob';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { scaledSize } from '../helper/util/Utilities';
import { FONTS } from '../utilies/GlobalFonts'
import { rewardInterstitialAd } from './Admob';

const images = [
    { image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/02/doc-document-file-11.jpg", name: 'doc', count: 0, id: 1 },
    { image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2018/09/document-file-types-5.jpg", name: 'pdf', count: 0, id: 2 },
    { image: "https://media.istockphoto.com/vectors/download-xls-icon-xls-file-with-down-arrow-symbol-downloading-and-vector-id1251414268?k=20&m=1251414268&s=612x612&w=0&h=hzH1jnv81BWEwNuy0TkqWSrU55XNnR5ZvNgVd92sIfM=", name: 'excel', count: 0, id: 3 },
    { image: "https://www.anudroid.com/wp-content/uploads/2018/11/powerpoint.jpg", name: 'ppt', count: 0, id: 4 },
    { image: "https://www.seekpng.com/png/detail/78-786266_video-icon-video-storytelling.png", name: 'video', count: 0, id: 5 },
    { image: "https://i.pinimg.com/736x/f5/34/4f/f5344f54cc650e51f3e07a23a9e14cdc.jpg", name: 'Images', count: 0, id: 6 }
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
                    value.map((int:any) => {
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
        <TouchableOpacity style={{ width: scaledSize(97), height: scaledSize(100), backgroundColor: '#fff', padding: scaledSize(10), margin: scaledSize(10), borderRadius: 10, elevation: 5 }} onPress={() => {
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
                source={{ uri: item?.image }}
                style={styles.pdf}
                resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', marginBottom: scaledSize(15), color: 'grey', fontSize: 13, fontFamily: FONTS.MerriweatherRegular, top: scaledSize(-5) }}>{item?.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, marginTop: scaledSize(10), width: '100%', marginLeft: scaledSize(0) }}>
            <FlatList
                keyExtractor={(index) => index.toString()}
                data={data}
                numColumns={3}
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
        height: scaledSize(45),
        width: scaledSize(40),
        alignSelf: 'center',
        borderRadius: scaledSize(5),
        margin: scaledSize(10),
        //backgroundColor:'#f2f5ff'
        //margin: scaledSize(20)
    }
});