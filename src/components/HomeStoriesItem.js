/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { blackcolor, commonstyles, ITEM_WIDTH, medium_gray, shadow_color, whitecolor } from '../styles/commonstyles';

class HomeStoriesItem extends React.PureComponent {
  render() {
    return (
      <View style={{ marginRight: 5,marginLeft:10 }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Webstories', {
              item: this.props.item,
              detailsData: this.props.webstoriesData?.data,
            });
          }}>
          <View style={{ }}>
            <View style={{height:250}}>
           
                <Image
                  style={{
                    width: 120,
                    height: 200,
                    borderRadius:5,
                    resizeMode:'contain',
                                   }}
                  source={{ uri: this.props.item?.web_featured_image }}
                />
                   </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
export default HomeStoriesItem;
