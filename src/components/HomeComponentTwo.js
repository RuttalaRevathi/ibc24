/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Text, TouchableOpacity, View, Image } from 'react-native';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import {
  appThemeColor,
  blackcolor,
  commonstyles,
  Dark_graycolor,
  dot_color,
  Gary_Light,
  graycolor,
  light_blue,
  line_color,
  red_color,
} from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TouchableHighlight } from 'react-native';
import { Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


class HomeComponentTwo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

 
  sharecall = () => {
    const Link_Url = this.props.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .then((error) => console.log(error));
  };
  book = () => {
    Alert.alert("bookmark clicked")

  };
  render() {

    return (
      <View style={commonstyles.container}>
        <View style={commonstyles.catecomp2mainView}>
          <TouchableOpacity
            style={commonstyles.catecomp2Tochable}
            onPress={() => {
              this.props.navigation.navigate('Details', {
                item: this.props.item,
                detailsData: this.props.propsdata,
              });
            }}>

            <View style={commonstyles.cateviewText}>

              <Text
                numberOfLines={3}
                ellipsizeMode="tail"
                style={{ fontSize: 18, fontWeight: '700' }}>
                {this.props?.item?.title?.rendered?.includes(':') ? (
                  <Text style={{ color: red_color }}>
                    {this.props?.item?.title?.rendered?.split(':')[0]}
                    <Text style={{ color: red_color }}>:</Text>
                    <Text style={{ color: blackcolor }}>
                      {this.props?.item?.title?.rendered?.split(':')[1]}
                    </Text>
                  </Text>
                ) : (
                  <Text style={{ color: 'black' }}>
                    {this.props?.item?.title?.rendered}
                  </Text>
                )}
              </Text>
            </View>
            <View style={commonstyles.cateviewImg}>
              <Image
                source={{ uri: this.props?.item?.web_featured_image }}
                style={commonstyles.cateImage}
              />
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <View style={commonstyles.cateview}>
              <Text numberOfLines={2}
                ellipsizeMode="tail"
                style={[commonstyles.catetext, { width: 140 }]}>
                {this.props?.item?.category_name}</Text>
            </View>
      
            <TouchableHighlight activeOpacity={0.1}
              underlayColor={Gary_Light}
              style={commonstyles.THighliet}

              onPress={() => { this.sharecall() }}>
              <View style={commonstyles.shareMview}>

                <View style={commonstyles.imgview}>
                  <Image style={commonstyles.shareimage}
                    source={require('../Assets/Images/share.png')} />
                </View>
                <View style={commonstyles.shareview}>
                  <Text style={commonstyles.sharetext}>शेयर</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}
export default HomeComponentTwo;
