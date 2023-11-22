/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Share,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { appThemeColor, blackcolor, commonstyles, medium_gray, red_color } from '../styles/commonstyles';
import SubHeader from '../components/SubHeader';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import HomeComponentOne from '../components/HomeComponentOne';
import HomeComponentTwo from './HomeComponentTwo';



function HomeUI(props, { navigation }) {
  useEffect(() => {
  });
  const renderItemOne = ({ item }) => (
    <HomeComponentOne
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}

    />
  );
  const renderItemTwo = ({ item }) => (
    <HomeComponentTwo
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}

    />
  );
  return (
    <SafeAreaView style={commonstyles.container}>
      <View>
        {/* category name */}
        <View style={commonstyles.homeuimainview}>
          <View style={{ bottom: 10 }}>
            <Text style={commonstyles.homeuicatetext}>{props?.categoryName}</Text>
          </View>
          <TouchableOpacity style={commonstyles.moreview}
            onPress={() => {
              props.navigation.navigate(props.navigationScreen);
            }}>
            <View >
              <Text style={commonstyles.moretext}>सभी देख</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* flatlist for Latest News */}
        <View>
          <View style={commonstyles.flatView}>
            <FlatList
              data={props?.data?.slice(0, 1)}
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              numColumns={2}
              onEndReachedThreshold={50}
              getItemLayout={(data, index) => (
                { length: 40, offset: 40 * index, index }
              )}
              renderItem={renderItemOne}
            />

            <View >
              <FlatList
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                data={props?.data?.slice(1, 3)}
                onEndReachedThreshold={50}
                getItemLayout={(data, index) => (
                  { length: 40, offset: 40 * index, index }
                )}
                renderItem={renderItemTwo}
              />

            </View>
          </View>
        </View>
        
      </View>
    </SafeAreaView>
  );
}
export default HomeUI;
