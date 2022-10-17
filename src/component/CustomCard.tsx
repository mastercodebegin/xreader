//@ts-nocheck
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { deviceBasedDynamicDimension } from "../helper/util/scale";
import { COLORS } from "../utilies/GlobalColors";
//local imports

interface myProps {
  customStyles?: any;
  children?: any;
  onPress?: any;
}

const CustomCard = (props: myProps) => {
  return (
    <View
      // style={props.customStyles ? props.customStyles : styles.cardContainer}
      style={[styles.cardContainer, props.customStyles]}
    // activeOpacity={0.5}
    // onPress={props.onPress}
    >
      {props.children}
    </View>
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

export default CustomCard;
