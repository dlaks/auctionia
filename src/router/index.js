import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { Home, Barangs, GetStarted, SignIn, SignUp, AddBarangs, UserProfile, Wallet, ItemDetails, Transaction, Bid, UpdateProfile, Splash, UploadPhoto, Comments, Etalase, BidOther, BidMe} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BottomNavigator from '../component/molecules/BottomNavigator';
import TopNavigator from '../component/molecules/TopNavigator';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const MainApp = () => {
    return (
        
        <Tab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="AddBarangs" component={AddBarangs} />
            <Tab.Screen name="Wallet" component={Wallet} />
            <Tab.Screen name="UserProfile" component={UserProfile} />
        </Tab.Navigator>
    )
}

const TopTabBarTransactions = () => {
    return (
        <TopTab.Navigator tabBar={props => <TopNavigator {...props}/>}>
          <TopTab.Screen name="BidMe" component={BidMe} />
          <TopTab.Screen name="BidOther" component={BidOther} />
        </TopTab.Navigator>
    );
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
            <Stack.Screen name="MainApp" component={MainApp} options={{headerShown:false}}/>
            <Stack.Screen name="GetStarted" component={GetStarted} options={{headerShown:false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
            <Stack.Screen name="Barangs" component={Barangs} options={{headerShown:false}}/>
            <Stack.Screen name="ItemDetails" component={ItemDetails} options={{headerShown:false}}/>
            <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{headerShown:false}}/>
            <Stack.Screen name="UploadPhoto" component={UploadPhoto} options={{headerShown:false}}/>
            <Stack.Screen name="Bid" component={Bid} options={{headerShown:false}}/>
            <Stack.Screen name="Comments" component={Comments} options={{headerShown:false}}/>
            <Stack.Screen name="Etalase" component={Etalase} options={{headerShown:false}}/>
            <Stack.Screen name="Transactions" component={TopTabBarTransactions} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}

export default Router;