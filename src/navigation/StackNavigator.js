
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
import { CardViewer } from "../component/CardView"
import { AllDocViewer } from "../component/AllDocumentViewer"
import { AllDocViewerPage } from "../screen/documents/AllDocViewerPage"
import { CardViewerPage } from "../screen/documents/CardViewerPage"

const Stack = createStackNavigator();


export default StackNavigator = () => {

    // const BottomTab =  
  
    return (
      <Stack.Navigator initialRouteName={'Document'} 
      screenOptions={{ headerShown: false, gestureEnabled: false, 
       ...(Platform.OS === "android" && TransitionPresets.SlideFromRightIOS), }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Document" component={CardViewerPage} />
        <Stack.Screen name="AllDocumentView" component={AllDocViewerPage} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ProductView" component={TopTabsNavigator} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Swiper" component={Swiper} />
  
      </Stack.Navigator>
  
    )
  }

