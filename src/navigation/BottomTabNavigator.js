/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackNavigator from '../navigation/stack-navigators/HomeStackNavigator';
import Details from '../screens/Details';
import Home from '../screens/Home';
import { Image, Linking, TouchableOpacity } from 'react-native';
import { appThemeColor, blackcolor, Dark_Gray, whitecolor } from '../styles/commonstyles';
import PhotoGallery from '../screens/TopTabScreens/PhotoGallery';
import LatestNews from '../screens/LatestNews';
import FastImage from 'react-native-fast-image';
import Videos from '../screens/TopTabScreens/Videos';
import SearchScreen from '../screens/Search';


const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ focused }) => ({
        tabBarActiveTintColor: blackcolor,
        tabBarInactiveTintColor: Dark_Gray,
        style: { backgroundColor: 'rgba(52, 52, 52, 0.8)' },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          fontFamily: 'RobotoCondensed-Regular',
        },
        tabBarItemStyle: { width: 100 },
        tabBarStyle: {
          backgroundColor: whitecolor,
          height: 65,
        },
        tabBarOptions: {
          activeBackgroundColor: blackcolor,
          inactiveBackgroundColor: 'pink',
          showLabel: true,
        },
      })}>
      <Tab.Screen
        name="TopTabs"
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarLabelStyle: {
            fontFamily: 'DIN-Condensed-Bold',
            tabBarActiveTintColor: blackcolor,
            tabBarInactiveTintColor: Dark_Gray,
            fontSize: 14
          },
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? blackcolor : Dark_Gray,
                top: 5,
              }}
              source={require('../Assets/Images/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Videos"
        component={Videos}
        options={{
          headerShown: false,
          tabBarLabel: 'Videos',
          tabBarLabelStyle: {
            fontFamily: 'DIN-Condensed-Bold',
            tabBarActiveTintColor: blackcolor,
            tabBarInactiveTintColor: Dark_Gray,
            fontSize: 14
          
          },
          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? blackcolor : Dark_Gray,
                top: 5,
              }}
              source={require('../Assets/Images/topnews.png')}
            />
          ),
        }}
      />


      <Tab.Screen
        name="Epaper"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',

          tabBarLabelStyle: {
            fontFamily: 'DIN-Condensed-Bold',
            tabBarActiveTintColor: blackcolor,
            tabBarInactiveTintColor: Dark_Gray,
            fontSize: 14,
          },
          // tabBarButton: props => (
          //   <TouchableOpacity
          //     {...props}
          //     onPress={() => {
          //       Linking.openURL('https://epaper.ntnews.com/');
          //     }}
          //   />
          // ),

          tabBarIcon: ({ color, focused }) => (
            <Image
              style={{
                height: 20,
                width: 20,
                tintColor: focused ? blackcolor : Dark_Gray,
                top: 5,
              }}
              source={require('../Assets/Images/search.png')}
            />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
