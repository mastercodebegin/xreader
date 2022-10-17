//@ts-nocheck
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Text,
  Platform,
} from "react-native";
// import { CustomDrawer } from "../component/CustomDrawer";
import Icon from "react-native-vector-icons/FontAwesome";
import { CardViewerPage } from "../screen/documents/CardViewerPage"
import { scaledSize } from "../helper/util/Utilities";
import BottomTabNavigator from "./BottomTabNavigator";
//local imports

interface myProps {
  props?: any;
  navigation?: any;
}

const MainStack = createStackNavigator();
export const DrawerNavigator: React.FC<myProps> = (props) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={MyDrawer}
      />
    </MainStack.Navigator>
  );
};

export const NavigationDrawerStructure = (props: any) => {
  //Structure for the navigatin Drawer

  console.log("custom", props);
  return (
    <View
      style={{
        flexDirection: "row",
        paddingLeft: scaledSize(15),
        position:'absolute',
        zIndex:1,
        top:scaledSize(60)
      }}
    >
      <TouchableOpacity
        onPress={() => props.navigationProps.navigation.openDrawer()}
      >
        {/*Donute Button Image */}
      <Text>Harshad</Text>
        {/* <Image source={drawerIcon} style={styles.backImgStyle} /> */}
      </TouchableOpacity>
    </View>
  );
};

const Drawer = createDrawerNavigator();
const MyDrawer: React.FC<myProps> = (props) => {
  //console.log("drawer me nav", props);
  return (
    <Drawer.Navigator
    screenOptions={{headerShown:false}}
      drawerContent={(props) => {}}
      initialRouteName="Dashboard"
      drawerStyle={{ width: "60%", backgroundColor: "transparent" }}
    >
      <Drawer.Screen name="Dashboard" options={{title:'',headerStyle:{backgroundColor:'orange'}}} component={BottomTabNavigator} />
      {/* <Drawer.Screen name="subscription" component={SubscriptionNavigator} /> */}
    </Drawer.Navigator>
  );
};


const HomeStack = createStackNavigator();
const LandingNavigator: React.FC<myProps> = (props) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
      name="Dashboard"
      options={{
       headerShown:false,
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={props} />
        ),
        headerTitleAlign: "center",
      }}
      component={CardViewerPage}
      />
    </HomeStack.Navigator>
  );
};





const styles = StyleSheet.create({
  backImgStyle: {
    //width: deviceBasedDynamicDimension(25, true, 1),
   // height: deviceBasedDynamicDimension(25, false, 1),
    opacity: 1,
    // resizeMode: "contain",
  },
  btnContainer: {
   // marginLeft: deviceBasedDynamicDimension(10, false, 1),
  },
  image_SearchImage: {
    //width: deviceBasedDynamicDimension(24, true, 1),
   // height: deviceBasedDynamicDimension(24, false, 1),
    opacity: 1,
    // resizeMode: "contain",
  //  marginRight: deviceBasedDynamicDimension(10, false, 1),
   // color: COLORS.primaryShadow,
  },
});
