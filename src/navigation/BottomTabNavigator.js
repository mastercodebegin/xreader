import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Image, View, StatusBar, Keyboard, ImageBackground } from "react-native"
//import Login from '../screen/login/Login';
//import SignUp from '../screen/signup/SignUp';
import { COLORS } from "../utilies/GlobalColors"
import { FONTS } from '../utilies/GlobalFonts';
import { CardViewerPage } from "../screen/documents/CardViewerPage"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { scaledSize } from '../helper/util/Utilities';
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppBG, BGImage, Bottomtab1, Camera, Files, Home, Settings, Time, Tools } from '../utilies/GlobalImages';
import { TimeLinePage } from '../screen/timeline/timeline';
const ScannerView = () => {
  return (
    <View>
      <Text>Scanner</Text>
    </View>
  )
}

const SettingsView = () => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}
const screensData = [
  { name: 'Home', focus: Files, unfocus: Files, component: CardViewerPage },
  { name: 'Tools', focus: Tools, unfocus: Tools, component: TimeLinePage },
  { name: 'Scanner', focus: Camera, unfocus: Camera, component: ScannerView },
  { name: 'Settings', focus: Settings, unfocus: Settings, component: SettingsView }
]
// { name: 'Home', focus: Files, unfocus: Files, component: CardViewerPage },
// { name: 'Support', focus: Camera, unfocus: Camera, component: ScannerView },
// { name: 'What Next', focus: Settings, unfocus: Settings, component: SettingsView }

export default BottomTabsNavigator = () => {
  const [cartData, setCartData] = useState(0)
  const isFocused = useIsFocused();

  // useEffect(() => {
  //   if (isFocused) {
  //     setInterval(() => {
  //       values()
  //     }, 1000);
  //     //  console.log(cartData)
  //   }
  // }, [isFocused])

  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }

  const values = async () => {
    let value = await AsyncStorage.getItem('cart')
    let key = JSON.parse(value)
    var latestData = removeDuplicates(key, 'id')
    //console.log(latestData,"dix")
    setCartData(latestData.length)
  }
  const BottomTabs = createBottomTabNavigator()
  return (
    // <ImageBackground source={AppBG} resizeMode='contain'>
    <BottomTabs.Navigator screenOptions={{
      headerShown: false, tabBarBackground: () => {
        return <ImageBackground source={Bottomtab1}
          style={{ width: '100%', height: '100%' }}>
          <View></View>
        </ImageBackground>
      }, tabBarStyle: styles.bottomTabStyle, tabBarHideOnKeyboard: true
    }}>
      {screensData.map((item, key) =>
        <BottomTabs.Screen key={key} name={item.name} component={item.component}
          options={{
            tabBarIcon: ({ focused }) => (
              focused ?
                <Image resizeMode='contain' resizeMethod='resize' source={item.unfocus} style={[styles.tabbarIcon, { top: scaledSize(0), left: scaledSize(0) }]} />
                :
                <Image resizeMode='contain' resizeMethod='resize' source={item.unfocus} style={[styles.tabbarIcon, { top: scaledSize(0), left: scaledSize(0) }]} />
            ),

            tabBarLabel: ({ focused }) => (
              <Text style={{ fontSize: item.name == 'Booking History' ? 7 : 9, color: focused ? COLORS.darkBlue : COLORS.grey, fontWeight: '200', top: focused ? scaledSize(-2) : scaledSize(-2), left: scaledSize(1), marginBottom: scaledSize(6), fontFamily: FONTS.MerriweatherBold }}>{item?.name}</Text>
            ),
          }}
        />)}
    </BottomTabs.Navigator>
    // </ImageBackground>
  );

}

const styles = StyleSheet.create({
  bottomWrapper: { flex: 1, },
  bottomTabStyle: {
    // backgroundColor: COLORS.TRANSPARENT,
    position: 'absolute',
    borderTopWidth: 0.5,
    elevation: 10,
    height: scaledSize(70),
    // borderWidth:1.5,
    // borderTopWidth:1,
    // borderColor:'orange',
    //borderTopColor:'orange'
  },
  tabbarIcon: {
    height: scaledSize(27),
    width: scaledSize(27)
  },
  addScreenStyle: { color: 'black', fontSize: scaledSize(27), textAlign: 'center', marginTop: scaledSize(250) },
  tabbarIcon3: {
    height: scaledSize(39),
    width: scaledSize(39),
  },
  bottomTab: {
    flexDirection: 'row',
    //backgroundColor:COLORS.themeBlue,
    marginTop: scaledSize(5),
    marginLeft: scaledSize(5),

  },
  bottomTab5: {
    flexDirection: 'row',
    //backgroundColor:COLORS.themeBlue,
    marginTop: scaledSize(20),
    //marginLeft:scaledSize(10),

  },
  bottomTab1:
  {
    flexDirection: 'row',
    //backgroundColor:COLORS.themeBlue,
    marginTop: scaledSize(25),
    marginLeft: scaledSize(5)
    //marginRight:scaledSize(10),


  }
})


