/* eslint-disable prettier/prettier */
import React from 'react';
import {HeaderStyle} from '../styles/Header.Styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Dark_Gray, appThemeColor, blackcolor} from '../styles/commonstyles';
export default function SubHeader(props, {navigation}) {
  return (
    <View style={HeaderStyle.subHeaderviewHeight}>
      <View style={{flex: 0.3,backgroundColor:'pink'}}>
        <TouchableOpacity
          onPress={() => {
            props.leftBtnClick();
          }}
          style={{zIndex: 999, flex: 1}}>
          <MaterialIcons
            name="arrow-back"
            size={30}
            color={blackcolor}
            style={{left: 8, zIndex: 999}}
          />

        </TouchableOpacity>
      </View>
      <View style={{flex: 1.8}}>
        <Text style={[HeaderStyle.subHeaderheading]}>{props.title}</Text>
      </View>

      {props.isShare != null && props.isShare === true && (
        <View style={{flex: 0.3}}>
          <TouchableOpacity
            onPress={() => {
              props.ShareClick();
            }}
            style={{zIndex: 999}}>
            <MaterialIcons
              name="share"
              size={25}
              color={Dark_Gray}
              style={{top: 5, left: 20}}
            />
          </TouchableOpacity>
        </View>
      )}
      {props.isBook != null && props.isBook === true && (
        <View style={{flex: 0.3}}>
          <TouchableOpacity
            onPress={() => {
              props.BookClick();
            }}
            style={{zIndex: 999}}>
            <MaterialIcons
              name="bookmark-outline"
              size={30}
              color={appThemeColor}
              style={{left: 20, top: 2}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
