/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeStackNavigator from '../navigation/stack-navigators/HomeStackNavigator';
import BottomTabNavigator from '../navigation/BottomTabNavigator';
import { HeaderStyle } from '../styles/Header.Styles';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import FastImage from 'react-native-fast-image';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ContactUs from '../screens/contactScreens/ContactUs';
import AboutUs from '../screens/contactScreens/AboutUs';
import PrivacyPolicy from '../screens/contactScreens/PrivacyPolicy';
import Terms from '../screens/contactScreens/Terms';
import Modal from "react-native-modal";
import SideMenu from '../components/SideMenu';


const windowWidth = Dimensions.get('window').width;
const Drawer = createDrawerNavigator();

const DrawerNavigator = (navigation) => {
  return (
    <Drawer.Navigator
      drawerType="slide"
      // drawerPosition="left"
      drawerStyle={{ width: 100, height: 100 }}
      drawerContent={props => <SideMenu {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: whitecolor },
          headerRight: () => (

            <View style={{ flexDirection: 'row', marginRight: 10 }}>
              {/* <TouchableOpacity style={{
                flexDirection: 'row', marginRight: 40, borderColor: blackcolor,
                borderWidth: 2, borderRadius: 5, width: 80, justifyContent: 'center', alignSelf: 'center', alignContent: 'center'
              }}
                onPress={() => {
                  // Linking.openURL('https://epaper.ntnews.com/');
                }}>
                <Image
                  style={[HeaderStyle.HeadRightpaperImg, { marginLeft: 5 }]}
                  source={require('../Assets/Images/paper.png')}
                />
                <Text style={{ color: blackcolor, fontSize: 15, fontWeight: '700', textAlign: 'center' }}>ई-पेपर</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/user.png')}
                />
              </TouchableOpacity> */}
            </View>

          ),

          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.headerLeftImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View style={HeaderStyle.HeadTitleView}>
              <TouchableOpacity>
                <Image
                  style={HeaderStyle.HeadTitleImg}
                  source={require('../Assets/Images/ibclogo.png')}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

