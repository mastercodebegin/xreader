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
        name="Home"
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
      initialRouteName="Home1"
      drawerStyle={{ width: "60%", backgroundColor: "transparent" }}
    >
      <Drawer.Screen name="Home1" options={{title:'',headerStyle:{backgroundColor:'orange'}}} component={BottomTabNavigator} />
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
    opacity: 1,
  },
  btnContainer: {
  },
  image_SearchImage: {
   
    opacity: 1,
   
  },
});
