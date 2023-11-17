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
        <View style={{
          flexDirection: 'row', left: 5, marginTop: 20, marginBottom: 20,
          borderBottomWidth: 1,
          borderBottomColor: medium_gray
        }}>
          <View style={{ bottom: 10 }}>
            <Text style={{ color: blackcolor, fontSize: 23, fontWeight: '900' }}>{props?.categoryName}</Text>
          </View>
          <TouchableOpacity style={{
            marginRight: 20, borderColor: red_color, marginLeft: 'auto',
            borderWidth: 1.5, borderRadius: 5, width: 60, justifyContent: 'center',
            alignSelf: 'center', alignContent: 'center', height: 25, bottom: 10,
          }}
            onPress={() => {
              props.navigation.navigate(props.navigationScreen);
            }}>
            <View style={{

            }}>
              <Text style={{ textAlign: 'center', color: red_color, fontWeight: '800' }}>सभी देख</Text>
            </View>
          </TouchableOpacity>


          {/* <View style={commonstyles.categoryMview}>
          <View style={commonstyles.categoryView}>
            <View>
              <Text style={commonstyles.Category}>{props?.categoryName}</Text>
            </View>
            <View style={commonstyles.dot}>
              <FontAwesome name="circle" size={10} color={appThemeColor} />
            </View>
          </View> */}
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
        {/* more text */}
        {/* <View style={commonstyles.moreview}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(props.navigationScreen);
            }}>
            <Text style={commonstyles.moretext}>More . . .</Text>

          </TouchableOpacity>
        </View> */}
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
}
export default HomeUI;
