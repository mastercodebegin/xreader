//@ts-nocheck
import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native'
import { scaledSize } from '../../helper/util/Utilities';
import Timeline from 'react-native-timeline-flatlist'
import CustomCard from '../../component/CustomCard';
import { deviceBasedDynamicDimension } from '../../helper/util/scale';
import { COLORS } from '../../utilies/GlobalColors';
import { FONTS } from '../../utilies/GlobalFonts';

const savedLocations = [
    { id: 1, reached: true, location: 'QUICKSTER', time: '02-10-2022', type: 'Update your location every minutes' },
    { id: 2, reached: true, location: 'DASHER', time: '02-10-2022', type: 'Update your location every 3 minutes' },
    { id: 3, reached: false, location: 'IM COMING', time: '02-10-2022', type: 'Update your location every 5 minutes' },
    { id: 4, reached: false, location: 'FASHIONABLY LATE', time: '02-10-2022', type: 'Update your location every 15 minutes' },
    { id: 5, reached: false, location: 'GHOST MODE', time: '02-10-2022', type: 'Your location stops being updated' }
]
const { width, height } = Dimensions.get('window')
export const TimeLinePage = (props: any) => {
    const [value, setValue] = useState(0)
    const renderDetails = (rowData: any, sectionID: any, rowID: any) => {
        setValue(rowData.id)
        return (
            <View key={rowData.id}>
                <View style={{borderWidth:1,borderColor:'#fff', backgroundColor: rowData?.reached ?  'green' : '#D3D3D3', height: scaledSize(20), width: scaledSize(20), borderRadius: scaledSize(50), position: 'absolute', left: scaledSize(-34), zIndex: 999, top: scaledSize(-11) }}>

                </View>
                <Text style={{ marginLeft: scaledSize(20), top: scaledSize(-20), fontFamily: FONTS.MerriweatherRegular, fontSize: scaledSize(18), marginTop: scaledSize(5), color: rowData.id == 1 ? '#bc00c6' : rowData.id == 2 ? '#7500ae' : rowData.id == 3 ? '#70009b' : rowData.id == 4 ? '#b50065' : '#5d5d5d' }}>{rowData.location}</Text>
                <Text style={{ marginLeft: scaledSize(20), fontFamily: FONTS.MerriweatherRegular, marginTop: scaledSize(2), color: '#5d5d5d', top: scaledSize(-10) }}>{rowData.type}</Text>
                <Text style={{ marginLeft: scaledSize(20), fontFamily: 'Quicksand-Medium', marginTop: scaledSize(0), marginRight: scaledSize(5), bottom: scaledSize(5) }}>{''}</Text>
            </View>
        )
    }

    return (
        //'#f000f9'
        <View style={styles.container}>
            {/* <Text style={[styles.textStyle, { color: 'white',left:scaledSize(-60) }]}>Location Accuracy</Text> */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <CustomCard customStyles={styles.cardStyle}>
                    <Timeline
                        data={savedLocations}
                        eventContainerStyle={{ top: scaledSize(0), alignSelf: 'center' }}
                        showTime={false}
                        innerCircle={'dot'}
                        dotColor={console.log('welcome')}
                        dotColor={'white'}
                        dotSize={7}
                        circleColor={COLORS.TRANSPARENT}
                        //circleStyle={{ borderColor: 'white', borderWidth: 2 }}
                        //listViewStyle={{top:scaledSize(15)}}
                        listViewContainerStyle={{ top: scaledSize(10) }}
                        circleSize={18}
                        lineColor={'#D3D3D3'}
                        renderDetail={renderDetails}
                    />
                </CustomCard>
            </ScrollView>
        </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        //justifyContent: 'flex-start',
        //marginLeft: scaledSize(20),
        //marginRight: scaledSize(20)
        // alignItems: 'center'
    },
    cardStyle: {
        flexDirection: 'column',
        backgroundColor: '#2a2a2a',
        borderRadius: scaledSize(10),
        width: '90%',
        elevation:10,
        height: height - scaledSize(110),
        marginBottom: scaledSize(65),
        fontFamily: 'Quicksand-Bold',
        textAlign: 'center',
        margin: deviceBasedDynamicDimension(20, true, 1),

    },
    viewBox: { height: scaledSize(120), elevation: 2, backgroundColor: '#694ff2', marginTop: scaledSize(15), borderRadius: 10 },
    textStyle: {
        fontSize: scaledSize(20), marginTop: scaledSize(10), fontStyle: 'normal', textAlign: 'center'
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