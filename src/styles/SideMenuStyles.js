/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';
import {Dark_Gray, appThemeColor, blackcolor, graycolor, whitecolor} from '../styles/commonstyles';

export const sideMenuStyle = StyleSheet.create({
  icon: {width: 15, height: 15},

  text: {
       color: Dark_Gray,
    fontFamily: 'Mandali-Regular',
    fontSize: 16,
     },
  Disttext: {
    paddingLeft:45,
     color: appThemeColor,
     fontFamily: 'Mandali-Regular',
     fontSize: 20,
 },
  item: {
    borderTopColor: graycolor,
    borderTopWidth: 1,
    // marginVertical: -10,
    // marginBottom: -5,
    // flexDirection:'row'
  },
  sectionsText: {
    color: whitecolor,
    paddingLeft: 10,
    fontFamily: 'Mandali-Bold',
    fontSize: 22,
  },
  cross:{top: 5, alignSelf: 'flex-end', justifyContent: 'center'}
});
