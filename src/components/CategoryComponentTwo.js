/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Share
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { appThemeColor, blackcolor, commonstyles, Dark_Gray, Gary_Light, Header_text, medium_gray, whitecolor } from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ShareUrl } from '../utilities/urls';

class CategoryComponentTwo extends React.PureComponent {
  sharecall = (name) => {
    const Link_Url = this.props.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .then((error) => console.log(error));
  };
  render() {
    let decode = require('html-entities-decoder');
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
                numberOfLines={4}
                ellipsizeMode="tail"
                style={commonstyles.HomeComp2Text}>
                {this.props.item?.title?.rendered}
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
              <Text  numberOfLines={3}
                ellipsizeMode="tail"
                style={[commonstyles.catetext,{width:200}]}>
                  {this.props?.item?.category_name}</Text>
            </View>
            <TouchableHighlight activeOpacity={0.1}
              underlayColor={Gary_Light}
              style={commonstyles.THighliet}

              onPress={() => this.sharecall()}>
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

export default CategoryComponentTwo;
