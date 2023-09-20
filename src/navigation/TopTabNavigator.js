/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Modal from 'react-native-modal';
import { SelectList } from 'react-native-dropdown-select-list';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Home from '../screens/Home';
import FastImage from 'react-native-fast-image';
import { appThemeColor, blackcolor, Dark_Gray, light_blue, red, whitecolor } from '../styles/commonstyles';
import CinemaScreen from '../screens/TopTabScreens/Cinema';
import HealthScreen from '../screens/TopTabScreens/Health';
import NationalScreen from '../screens/TopTabScreens/National';
import Videos from '../screens/TopTabScreens/Videos';

import City from '../screens/TopTabScreens/City';
import State from '../screens/TopTabScreens/State';
import Country from '../screens/TopTabScreens/Country';
import World from '../screens/TopTabScreens/World';
import Sports from '../screens/TopTabScreens/Sports';
import Business from '../screens/TopTabScreens/Business';
import Entertainment from '../screens/TopTabScreens/Entertainment';
import KhabarBebak from '../screens/TopTabScreens/KhabarBebak';
import PhotoGallery from '../screens/TopTabScreens/PhotoGallery';


const TopTab = createMaterialTopTabNavigator();
const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },

];
const renderLabel = () => {
  return (
    <SelectList
      setSelected={(val) => setSelected(val)}
      data={data}
      save="value"
    />
  );
};

const TopTabNavigator = () => {
  const [selected, setSelected] = React.useState('');

  return (
    <TopTab.Navigator
      screenOptions={({ focused }) => ({
        tabBarScrollEnabled: true,
        tabBarIndicatorStyle: {backgroundColor: blackcolor},
        tabBarActiveTintColor: blackcolor,
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: { fontSize: 20, fontFamily: 'Mandali-Bold' },
        tabBarStyle: {
          backgroundColor: whitecolor,
          height: 50,
        },
        tabBarItemStyle: {
          width: 'auto',
          alignItems: 'flex-start',
        },
        tabBarOptions: {
          showLabel: true,
        },
      })}>


      <TopTab.Screen name="शहर" component={City} />
      <TopTab.Screen name="प्रदेश" component={State} />
      <TopTab.Screen name="देश" component={Country} />
      <TopTab.Screen name="दुनिया" component={World} />
      <TopTab.Screen name="खेल" component={Sports} />
      <TopTab.Screen name="फोटो गैलरी" component={PhotoGallery} />
      <TopTab.Screen name="वीडियो" component={Videos} />
      <TopTab.Screen name="बिज़नेस" component={Business} />
      <TopTab.Screen name="एंटरटेनमेंट" component={Entertainment} />
      <TopTab.Screen name="Khabar Bebak" component={KhabarBebak} />
      {/* <TopTab.Screen name="सरकारी योजना" component={KhabarBebak} /> */}

      
    </TopTab.Navigator>
  );
};

export default TopTabNavigator;
