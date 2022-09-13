//@ts-nocheck
import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { scaledSize } from '../helper/util/Utilities';

const images = [
    "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/02/doc-document-file-11.jpg",
    "https://d27jswm5an3efw.cloudfront.net/app/uploads/2018/09/document-file-types-5.jpg",
    "https://media.istockphoto.com/vectors/download-xls-icon-xls-file-with-down-arrow-symbol-downloading-and-vector-id1251414268?k=20&m=1251414268&s=612x612&w=0&h=hzH1jnv81BWEwNuy0TkqWSrU55XNnR5ZvNgVd92sIfM=",
    "https://www.anudroid.com/wp-content/uploads/2018/11/powerpoint.jpg"
];
export const CardViewer = (props: any) => {
    const _renderItem = ({ item, index }) => (
        <TouchableOpacity style={{ width: '50%' }} onPress={() => props.onClick(index)}>
            <Image
                source={{ uri: item }}
                style={styles.pdf}
                resizeMode="cover"
            />
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, marginHorizontal: scaledSize(5), justifyContent: 'center', alignItems: 'center', marginTop: scaledSize(20) }}>
            <FlatList
                keyExtractor={(index) => index.toString()}
                data={images}
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
        height: scaledSize(250),
        borderRadius: scaledSize(5),
        margin: scaledSize(2)
    }
});