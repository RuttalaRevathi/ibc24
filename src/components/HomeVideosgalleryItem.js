/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Alert,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { commonstyles, whitecolor } from '../styles/commonstyles';

class HomeVideosgalleryItem extends React.PureComponent {
  render() {
    return (
      <View style={{ marginRight: 5, marginLeft: 10 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('VideoArticle', {
              item: this.props.item,
              detailsData: this.props.videosData?.data,
            });
          }}>
          <View style={commonstyles.sliderView}>
            <ImageBackground
              imageStyle={{ borderRadius: 6, resizeMode: 'contain' }}
              source={{ uri: this.props.item?.web_featured_image }}
              style={commonstyles.videocard}>
              {/* <View
                style={{
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignSelf: 'center',
                  marginVertical: 100,
                }}>
                <Image
                  style={{width: 30, height: 20}}
                  source={require('../Assets/Images/videoicon.png')}
                />
              </View> */}
            </ImageBackground>
            <LinearGradient
              colors={['rgba(0,0,0,0)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,1)']}
              style={{
                width: '100%',
                flex: 1.4,
                bottom: 0,
                // borderBottomLeftRadius: 15,
                // borderBottomRightRadius: 15,
                position: 'absolute',
                height: 100,
              }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  color: whitecolor,
                  fontFamily: 'Mandali-Bold',
                  fontSize: 18,
                  marginLeft: 10,
                  marginRight: 10,
                  lineHeight: 29,
                  bottom: 10,
                  position: 'absolute',
                }}>
                {this.props?.item?.title?.rendered}
              </Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeVideosgalleryItem;
