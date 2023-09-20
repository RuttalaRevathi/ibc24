/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Text, TouchableOpacity, View, Image, TouchableHighlight} from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import {Dark_Gray, Gary_Light, commonstyles, medium_gray} from '../styles/commonstyles';

class CategoryComponentOne extends React.PureComponent {
  render() {
    return (
      <View
        style={{
          marginRight: 5,
          marginLeft: 5,
          marginTop: 10,
          borderBottomColor: medium_gray,
          borderBottomWidth: 2,
        }}>
        <TouchableOpacity
          style={{}}
          onPress={() => {
            this.props?.navigation?.navigate('Details', {
              item: this.props?.item,
              detailsData: this.props?.propsdata,
            });
          }}>
          <Text style={commonstyles.slidertext}>
            {this.props?.item?.title?.rendered}
          </Text>

          <View style={commonstyles.sliderView}>
            <Image
              source={{uri: this.props?.item?.web_featured_image}}
              style={commonstyles.slidercard}
            />
          </View>
        </TouchableOpacity>
        <TouchableHighlight activeOpacity={0.1}
            underlayColor= {Gary_Light}
            style={commonstyles.THighliet}

            onPress={() => this.sharecall()}>
            <View style={{
              flexDirection: 'row', justifyContent: 'flex-end', flex: 1,
              marginTop: 10, marginBottom: 10, width: 80, marginLeft: 'auto'
            }}>
              <View style={{ marginRight: 8, marginTop: 4, }}>
                <Image style={{ height: 18, width: 18, color: Dark_Gray, resizeMode: 'contain' }}
                  source={require('../Assets/Images/share.png')} />
              </View>
              <View style={{ marginRight: 15 }}>
                <Text style={{ color: Dark_Gray, fontSize: 18, fontWeight: '800' }}>शेयर</Text>
              </View>
            </View>
          </TouchableHighlight>
      </View>
    );
  }
}
export default CategoryComponentOne;
