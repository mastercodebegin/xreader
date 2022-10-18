//@ts-nocheck
import React from "react";
import { View, StyleSheet, TouchableOpacity,Modal,TextInput,Text } from "react-native";
import { scaledSize } from '../helper/util/Utilities';
import { deviceBasedDynamicDimension } from '../helper/util/scale';
import { COLORS } from "../utilies/GlobalColors";
//local imports

interface myProps {
    visible?: any;
    open?: any;
    close?: any;
    text?: any;
    onText?: any;
    num?: any;
    onOpen?: any;
    onClose?: any;
}

const ModalView = (props: myProps) => {
    return (
        <>
            <Modal
                visible={props.visible}
                animationType="fade" transparent={true}
            //presentationStyle={"overFullScreen"}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        width: scaledSize(300),
                        borderColor: COLORS.grey,
                        borderWidth: 0,
                        backgroundColor: "#1f1646",
                        borderRadius: scaledSize(10),
                        opacity: 0.9,
                        height: scaledSize(210)
                    }}>
                        <View style={{ backgroundColor: '#1f1646', borderRadius: scaledSize(10), height: scaledSize(200) }}>
                            <Text style={{ margin: scaledSize(10), fontSize: scaledSize(17), textAlign: 'center', color: 'white', fontFamily: 'Quicksand-Medium' }}>This File is Protected!</Text>
                            <View style={{ backgroundColor: '#fff', width: '83%', alignSelf: 'center', margin: scaledSize(10), borderRadius: scaledSize(5) }}>
                                <TextInput
                                    value={props.text}
                                    placeholder="Password..."
                                    autoCapitalize="none"
                                    keyboardType='name-phone-pad'
                                    placeholderTextColor="black"
                                    onChangeText={(value: any) => props.onText(value)}
                                    style={{ marginLeft: scaledSize(5), borderRadius: scaledSize(5), color: 'black', borderColor: 'grey', borderWidth: 0, fontSize: scaledSize(14), padding: scaledSize(5), paddingLeft: scaledSize(10) }} />
                            </View>
                            {props.text.length == 0 && <Text style={{ textAlign: 'left', color: 'red', left: scaledSize(25) }}>Enter Password</Text>}
                            {props.num > 1 && props.text.length > 0 && <Text style={{ textAlign: 'center', color: 'red' }}>Wrong Password</Text>}
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                                <TouchableOpacity onPress={props.onOpen}
                                    style={{
                                        opacity: 1,
                                        backgroundColor: "#54c0e8",
                                        borderRadius: deviceBasedDynamicDimension(3, true, 1),
                                        justifyContent: "center",
                                        height: deviceBasedDynamicDimension(50, false, 1),
                                        paddingHorizontal: deviceBasedDynamicDimension(20, true, 1),
                                        //  marginRight:  deviceBasedDynamicDimension(10, true, 1),
                                    }}>
                                    <Text style={{ margin: scaledSize(10), fontSize: scaledSize(15), fontFamily: 'Quicksand-Bold', textAlign: 'center', color: 'white' }}>{props.open}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={props.onClose}
                                    style={{
                                        backgroundColor: "#e31d93",
                                        borderRadius: deviceBasedDynamicDimension(3, true, 1),
                                        justifyContent: "center",
                                        height: deviceBasedDynamicDimension(50, false, 1),
                                        paddingHorizontal: deviceBasedDynamicDimension(10, true, 1),
                                    }}>
                                    <Text style={{ margin: scaledSize(10), fontSize: scaledSize(15), fontFamily: 'Quicksand-Bold', textAlign: 'center', color: 'white' }}>{props.close}</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: "row",
        marginVertical: deviceBasedDynamicDimension(10, true, 1),

        padding: deviceBasedDynamicDimension(15, true, 1),
        borderRadius: deviceBasedDynamicDimension(20, true, 1),
        backgroundColor: COLORS.white
        // elevation: 4,
        // backgroundColor: COLORS.white,
        // // backgroundColor: COLORS.white,
        // shadowColor: COLORS.primaryShadow,
        // shadowOffset: { width: 1, height: 1 },
        // shadowOpacity: 0.9,
        // shadowRadius: 8,

        // width: "100%",
    },
});

export default ModalView;
