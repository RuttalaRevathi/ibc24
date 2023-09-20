/* eslint-disable prettier/prettier */
import React from 'react';
import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/Home';
import Details from '../../screens/Details';
// import Details from '../../screens/NewsArticle';

import PhotoArticle from '../../screens/PhotoArticle';

import TopTabNavigator from '../TopTabNavigator';


import horoscopeDetails from '../../screens/horoscopeDetails';
import horoscopeWeeklyDetails from '../../screens/horoscopeWeeklyDetails';
import SideMenu from '../../components/SideMenu';
import SearchScreen from '../../screens/Search';
import Bhopal from '../../screens/CityScreens/Bhopal';
import IndorScreen from '../../screens/CityScreens/Indor';
import VideoArticle from '../../screens/VideoArticle';
import jabalpurReducer from '../../redux/reducers/jabalpurReducer';
import JabalpurScreen from '../../screens/CityScreens/Jabalpur';
import GwaliorScreen from '../../screens/CityScreens/Gwalior';
import RaipurScreen from '../../screens/CityScreens/Raipur';
import BilaspurScreen from '../../screens/CityScreens/Bilaspur';
import Chhattisgarh from '../../screens/StateScreens/Chhattisgarh';
import Madhyapradesh from '../../screens/StateScreens/Madhyapradesh';
import BiharScreen from '../../screens/StateScreens/Bihar';
import Up from '../../screens/StateScreens/Up';
import MaharashtraScreen from '../../screens/StateScreens/Maharashtra';
import Hp from '../../screens/StateScreens/Hp';
import HaryanaScreen from '../../screens/StateScreens/Haryana';
import Punjab from '../../screens/StateScreens/Punjab';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,

      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={TopTabNavigator} />
      {/* <Stack.Screen name="SideMenu" component={SideMenu} options={{ headerShown: false }}/> */}
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="VideoArticle" component={VideoArticle} />
      <Stack.Screen name="PhotoArticle" component={PhotoArticle} />

      <Stack.Screen name="Bhopal" component={Bhopal} />
      <Stack.Screen name="Indor" component={IndorScreen} />
      <Stack.Screen name="Jabalpur" component={JabalpurScreen} />
      <Stack.Screen name="Gwalior" component={GwaliorScreen} />
      <Stack.Screen name="Raipur" component={RaipurScreen} />
      <Stack.Screen name="Bilaspur" component={BilaspurScreen} />
      <Stack.Screen name="Chhattisgarh" component={Chhattisgarh} />
      <Stack.Screen name="Madhyapradesh" component={Madhyapradesh} />
       <Stack.Screen name="Bihar" component={BiharScreen} />
       <Stack.Screen name="Up" component={Up} />
      <Stack.Screen name="Maharashtra" component={MaharashtraScreen} />
      <Stack.Screen name="Hp" component={Hp} />
      <Stack.Screen name="Haryana" component={HaryanaScreen} />
     <Stack.Screen name="Punjab" component={Punjab} />
     




     
      
      

    </Stack.Navigator>
  )
};

export default HomeStackNavigator;
