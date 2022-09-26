//@ts-nocheck
import React from 'react'
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'
import { scaledSize } from '../helper/util/Utilities';

const images = [
    { image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/02/doc-document-file-11.jpg", name: 'doc' },
    { image: "https://d27jswm5an3efw.cloudfront.net/app/uploads/2018/09/document-file-types-5.jpg", name: 'pdf' },
    { image: "https://media.istockphoto.com/vectors/download-xls-icon-xls-file-with-down-arrow-symbol-downloading-and-vector-id1251414268?k=20&m=1251414268&s=612x612&w=0&h=hzH1jnv81BWEwNuy0TkqWSrU55XNnR5ZvNgVd92sIfM=", name: 'xls' },
    { image: "https://www.anudroid.com/wp-content/uploads/2018/11/powerpoint.jpg", name: 'ppt' },
    { image: "https://www.seekpng.com/png/detail/78-786266_video-icon-video-storytelling.png", name: 'video' },
    { image: "https://i.pinimg.com/736x/f5/34/4f/f5344f54cc650e51f3e07a23a9e14cdc.jpg", name: 'Images' }
];
export const CardViewer = (props: any) => {
    const _renderItem = ({ item, index }) => (
        <TouchableOpacity disabled={index == 1 ? false : true} style={{ width: scaledSize(117) }} onPress={() => props.onClick(index)}>
            <Image
                source={{ uri: item?.image }}
                style={styles.pdf}
                resizeMode="cover"
            />
            <Text style={{ textAlign: 'center', marginBottom: scaledSize(15),color:'grey',fontSize:15 }}>{item?.name}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={{ flex: 1, marginTop: scaledSize(10), width: '100%', marginLeft: scaledSize(0) }}>
            <FlatList
                keyExtractor={(index) => index.toString()}
                data={images}
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
        height: scaledSize(100),
        borderRadius: scaledSize(5),
        margin: scaledSize(10),
        //backgroundColor:'#f2f5ff'
        //margin: scaledSize(20)
    }
});