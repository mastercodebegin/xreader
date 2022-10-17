
import React from "react"
import ForgotPassword from "../screen/forgot/ForgotPassword"
import Login from "../screen/login/Login"
import SignUp from "../screen/signup/SignUp"
import ProductDetails from "../screen/productview/ProductDetails"
import { TransitionPresets,createStackNavigator,CardStyleInterpolators } from "@react-navigation/stack"
import TopTabsNavigator from "./TopTabsNavigator"
import BottomTabNavigator from "./BottomTabNavigator"
import Otp from "../screen/testprogram/Otp"
import Swiper from "../helper/SwiperComponent"
import { AllDocViewerPage } from "../screen/documents/AllDocViewerPage"
import { DrawerNavigator } from "./MainNavigation"
import { PdfViewer } from "../component/PdfViewer"
const Stack = createStackNavigator();


export default StackNavigator = () => {

    // const BottomTab =  
  
    return (
      <Stack.Navigator initialRouteName={'Dashboard'} 
      screenOptions={{ headerShown: false, gestureEnabled: true, headerStyle:{backgroundColor:'#fff',elevation:10,borderBottomWidth:1},
       ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS), }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Dashboard" component={DrawerNavigator} />
        <Stack.Screen name="AllDocumentView" component={AllDocViewerPage} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ProductView" component={TopTabsNavigator} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        {/* <Stack.Screen name="Dashboard" component={BottomTabNavigator} /> */}
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Swiper" component={Swiper} />
  
      </Stack.Navigator>
  
    )
  }

