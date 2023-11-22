/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-web-swiper';
import InstaStory from 'react-native-insta-story';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
import getWebstoriesAction from '../redux/actions/getWebstoriesAction';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  RefreshControl,
  Animated,
  Easing,
} from 'react-native';
import getSliderAction from '../redux/actions/getSliderAction';

import {
  appThemeColor,
  blackcolor,
  commonstyles,
  ITEM_WIDTH,
  medium_gray,
  red_color,
  SLIDER_WIDTH,
  whitecolor,
} from '../styles/commonstyles';
import LinearGradient from 'react-native-linear-gradient';
import HomeUI from '../components/HomeUI';
import rasiPhalaluUI from '../components/rasiPhaluUI';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeCarouselItem from '../components/HomeCarouselItem';
import HomeCartoonItem from '../components/HomeCartoonItem';
import HomePhotogalleryItemTwo from '../components/HomePhotogalleryItemTwo';
import HomeVideosgalleryItem from '../components/HomeVideosgalleryItem';
import HomePhotogalleryItemOne from '../components/HomePhotogalleryItemOne';
import { store } from '../redux/store';
import getLatestNewsAction from '../redux/actions/getLatestNewsAction';
import getCinemaAction from '../redux/actions/getCinemaAction';
import getRasiPhalaluAction from '../redux/actions/getRasiPhalaluAction';
import getCartoonAction from '../redux/actions/getCartoonAction';
import getHealthAction from '../redux/actions/getHealthAction';

import getChhattisgarhAction from '../redux/actions/getChhattisgarhAction';
import getBlogAction from '../redux/actions/getBlogAction';
import getSportsAction from '../redux/actions/getSportsAction';
import getBusinessAction from '../redux/actions/getBusinessAction';
import getVideoAction from '../redux/actions/getVideoAction';
import getPhotoGalleryAction from '../redux/actions/getPhotoGalleryAction';
import { getBiharAction } from '../redux/actions/getBiharAction';
import { getMaharashtraAction } from '../redux/actions/getMaharashtraAction';
import { getHaryanaAction } from '../redux/actions/getHaryanaAction';
import HomeRasiphalaluItemOne from '../components/HomeRasiphalaluItemOne';
import HomeRasiphalaluItemTwo from '../components/HomeRasiphalaluItemTwo';
import getMenuAction from '../redux/actions/getMenuAction';

import getCityAction from '../redux/actions/getCityAction';
import getStateAction from '../redux/actions/getStateAction';
import getCountryAction from '../redux/actions/getCountryAction';
import getWorldAction from '../redux/actions/getWorldAction';
import getEntertainmentAction from '../redux/actions/getEntertainmentAction';
import getKhabarBebakAction from '../redux/actions/getKhabarBebakAction';
import { getIndorAction } from '../redux/actions/getIndorAction';
import { getGwaliorAction } from '../redux/actions/getGwaliorAction';
import { getRaipurAction } from '../redux/actions/getRaipurAction';
import { getJabalpurAction } from '../redux/actions/getJabalpurAction';
import { getBilaspurAction } from '../redux/actions/getBilaspurAction';
import getMadhyapradeshAction from '../redux/actions/getMadhyapradeshAction';
import getUpAction from '../redux/actions/getUpAction';
import getHpAction from '../redux/actions/getHpAction';
import getPunjabAction from '../redux/actions/getPunjabAction';
import getReligionAction from '../redux/actions/getReligionAction';
import { getAssemblyelectionAction } from '../redux/actions/getAssemblyelectionAction';
import HomeStoriesItem from '../components/HomeStoriesItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({
  navigation,
  sliderData,
  loading,
  latestNews,
  latestLoading,
  cinemaData,
  cinemaLoading,
  rasiPhalaluData,
  rasiPhalaluLoading,
  cartoonData,
  cartoonLoading,
  healthData,
  healthLoading,
  countryData,
  countryLoading,
  stateData,
  stateLoaing,
  chhattisgarhData,
  chhattisgarhLoading,
  blogData,
  blogLoading,
  religionData,
  religionLoading,
  sportsData,
  sportsLoading,
  businessData,
  businessLoading,
  upData,
  upLoading,
  worldData,
  worldLoading,
  khabarbebakData,
  khabarbebakLoading,
  madhyapradeshData,
  madhyapradeshLoading,
  cityData,
  cityLoading,
  webstoriesData,
  webstoriesLoading,
  entertainmentData,
  entertainmentLoading,
  hpData,
  hpLoading,
  videosData,
  videosLoading,
  photosData,
  photosLoading,
  punjabData,
  punjabLoading,
}: Props) => {
  // let decode = require('html-entities-decoder');
  const isCarousel = useRef(null);
  // const [index, setIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlayState, setAutoPlayState] = useState(true);
  cityData = useSelector(state => state.cityReducer.cityData,);
  cityLoading = useSelector(state => state.cityReducer.cityLoading,);
  sliderData = useSelector(state => state.sliderReducer.sliderData);
  loading = useSelector(state => state.sliderReducer.loading);
  latestNews = useSelector(state => state.latestNewsReducer.latestNews);
  latestLoading = useSelector(state => state.latestNewsReducer.latestLoading);
  cinemaData = useSelector(state => state.cinemaReducer.cinemaData);
  cinemaLoading = useSelector(state => state.cinemaReducer.cinemaLoading);
  rasiPhalaluData = useSelector(
    state => state.rasiPhalauReducer.rasiPhalaluData,
  );
  rasiPhalaluLoading = useSelector(
    state => state.rasiPhalauReducer.rasiPhalaluLoading,
  );
  cartoonData = useSelector(state => state.cartoonReducer.cartoonData);
  cartoonLoading = useSelector(state => state.cartoonReducer.cartoonLoading);
  healthData = useSelector(state => state.healthReducer.healthData);
  healthLoading = useSelector(state => state.healthReducer.healthLoading);
  countryData = useSelector(state => state.countryReducer.countryData);
  countryLoading = useSelector(
    state => state.countryReducer.countryLoading,
  );
  stateData = useSelector(state => state.stateReducer.stateData);
  stateLoaing = useSelector(
    state => state.stateReducer.stateLoaing,
  );
  chhattisgarhData = useSelector(state => state.chhattisgarhReducer.chhattisgarhData);
  chhattisgarhLoading = useSelector(state => state.chhattisgarhReducer.chhattisgarhLoading);
  blogData = useSelector(state => state.blogReducer.blogData);
  blogLoading = useSelector(state => state.blogReducer.blogLoading);
  religionData = useSelector(state => state.religionReducer.religionData,);
  religionLoading = useSelector(state => state.religionReducer.religionLoading,);
  sportsData = useSelector(state => state.sportsReducer.sportsData);
  sportsLoading = useSelector(state => state.sportsReducer.sportsLoading);
  upData = useSelector(state => state.upReducer.upData);
  upLoading = useSelector(state => state.upReducer.upLoading);
  worldData = useSelector(state => state.worldReducer.worldData);
  worldLoading = useSelector(state => state.worldReducer.worldLoading);
  khabarbebakData = useSelector(state => state.khabarBebakReducer.khabarbebakData);
  khabarbebakLoading = useSelector(state => state.khabarBebakReducer.khabarbebakLoading);
  madhyapradeshData = useSelector(state => state.madhyapradeshReducer.madhyapradeshData);
  madhyapradeshLoading = useSelector(state => state.madhyapradeshReducer.madhyapradeshLoading,);

  entertainmentData = useSelector(state => state.entertainmentReducer.entertainmentData);
  entertainmentLoading = useSelector(state => state.entertainmentReducer.entertainmentLoading);
  hpData = useSelector(state => state.hpReducer.hpData);
  hpLoading = useSelector(state => state.hpReducer.hpLoading);
  videosData = useSelector(state => state.videoReducer.videosData);
  videosLoading = useSelector(state => state.videoReducer.videosLoading);
  businessData = useSelector(state => state.businessReducer.businessData);
  businessLoading = useSelector(state => state.businessReducer.businessLoading);
  photosData = useSelector(state => state.photosGalleryReducer.photosData);
  photosLoading = useSelector(state => state.photosGalleryReducer.photosLoading,);
  punjabData = useSelector(state => state.punjabReducer.punjabData);
  punjabLoading = useSelector(state => state.punjabReducer.punjabLoading,);
  webstoriesData = useSelector(state => state.webstoriesReducer.webstoriesData);
  webstoriesLoading = useSelector(state => state.webstoriesReducer.webstoriesLoading,);
  const dispatch = useDispatch();
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [isBreakingNewsVisible, setIsBreakingNewsVisible] = useState(true);

 
  useEffect(() => {
    const totalWidth = latestNews?.data?.length * 200; // Assuming 200 is an average width for each item
    const endOffset = totalWidth - 200; // Subtracting 200 for the screen width
    const scroll = () => {
      Animated.timing(scrollX, {
        toValue: 1,
        duration: 3000, // Adjust the duration for the speed of scrolling
        // easing: Easing.linear,
        useNativeDriver: true,
        isInteraction: false,
      }).start(() => {
        if (flatListRef.current) {
          flatListRef.current.scrollToOffset({ offset: 0, animated: false });
        }
        scroll();
      });
    };

    scroll();
  }, []);
  useEffect(() => {
    const loadBreakingNewsVisibility = async () => {
      try {
        const visibilityState = await AsyncStorage.getItem('breakingNewsVisibility');
        if (visibilityState !== null) {
          setIsBreakingNewsVisible(visibilityState === 'true');
        }
      } catch (error) {
        console.error('Error loading breaking news visibility state:', error);
      }
    };

    loadBreakingNewsVisibility();
  }, []);

  // Function to toggle breaking news visibility and update AsyncStorage
  const handleCancelBreakingNews = () => {
    setIsBreakingNewsVisible(false); // Function to hide Breaking News
  };

 
  const renderItem = ({ item }) => {
    let decode = require('html-entities-decoder');

    return (
      <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
        <Text style={{ color: 'white', fontSize: 16 }} numberOfLines={1}>
          {decode(item.title?.rendered)}
        </Text>
      </View>
    );
  };
  const BreakingNews = ({ onCancel }) => {

    return (
      <View style={{ backgroundColor: 'red', height: 80 }}>
      <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', marginLeft: 5 }}>
        <View>
          <Text style={{ color: 'white', fontWeight: '700', fontSize: 20 }}>Breaking News</Text>
        </View>
        <View style={{ marginLeft: 'auto', marginRight: 10 }}>
          <TouchableOpacity onPress={onCancel}>
            <Image style={{ width: 25, height: 25, tintColor: 'white' }} source={require('../Assets/Images/cancel_white.png')} />
          </TouchableOpacity>
        </View>
      </View>
      {latestNews && latestNews.data ? (
        <Animated.FlatList
        data={latestNews.data}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ref={flatListRef}
        scrollEnabled={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        style={{
          transform: [{ translateX: scrollX }],
        }}
      />
      ) : (
        <View>
          {/* Placeholder or alternate content when data is undefined */}
          <Text>No data available</Text>
        </View>
      )}
    </View>
    
    );
  };
 
  const storiesItem = ({ item, index }) => (
    <HomeStoriesItem
      item={item}
      propsdata={webstoriesData?.data}
      navigation={navigation}
      index={index}
    />
  );

  const photoGalleryItemTwo = ({ item, index }) => (
    <HomePhotogalleryItemTwo
      item={item}
      propsdata={photosData?.data}
      navigation={navigation}
      index={index}
    />
  );

  const videoGalleryitem = ({ item, index }) => (
    <HomeVideosgalleryItem
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);


    setTimeout(() => {
      setRefreshing(false);
      dispatch(getMenuAction());
      dispatch(getSliderAction());
      dispatch(getLatestNewsAction());
      dispatch(getCinemaAction());
      dispatch(getRasiPhalaluAction());
      dispatch(getCartoonAction());
      dispatch(getHealthAction());
      dispatch(getCountryAction());
      dispatch(getStateAction());
      dispatch(getChhattisgarhAction());
      dispatch(getBlogAction());
      dispatch(getReligionAction());
      dispatch(getSportsAction());
      dispatch(getBusinessAction());
      dispatch(getUpAction());
      dispatch(getWorldAction());
      dispatch(getKhabarBebakAction());
      dispatch(getMadhyapradeshAction());
      dispatch(getCityAction());
      dispatch(getEntertainmentAction());
      dispatch(getHpAction());
      dispatch(getVideoAction());
      dispatch(getPhotoGalleryAction());
      dispatch(getIndorAction());
      dispatch(getJabalpurAction());
      dispatch(getGwaliorAction());
      dispatch(getRaipurAction());
      dispatch(getBilaspurAction());
      dispatch(getBiharAction());
      dispatch(getMaharashtraAction());
      dispatch(getHaryanaAction());
      dispatch(getPunjabAction());
      dispatch(getAssemblyelectionAction());
      dispatch(getWebstoriesAction());
      setIsBreakingNewsVisible(true);


    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>

      {/* Breaking News */}
      {isBreakingNewsVisible && (
        <BreakingNews onCancel={handleCancelBreakingNews} />
      )}

      <ScrollView style={commonstyles.scroll} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
       
        <View style={{ padding: 10 }}>
          {/* Spinner */}
          <Spinner
            //visibility of Overlay Loading Spinner
            visible={loading && latestLoading && cinemaLoading}
            //Text with the Spinner
            textContent={'Loading...'}
            //Text style of the Spinner Text
            textStyle={{ color: '#FFF' }}
          />


          {/* city */}
          <HomeUI
            categoryName="शहर"
            data={cityData?.data}
            navigationScreen="शहर"
            navigation={navigation}
          />
          {/* webstories */}
          <View>
            <View style={{
              flexDirection: 'row', left: 5, marginTop: 20, marginBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: medium_gray
            }}>
              <View style={{ bottom: 10 }}>
                <Text style={{ color: blackcolor, fontSize: 23, fontWeight: '900' }}>फोटो गैलरी</Text>
              </View>
              <TouchableOpacity style={{
                marginRight: 20, borderColor: red_color, marginLeft: 'auto',
                borderWidth: 1.5, borderRadius: 5, width: 60, justifyContent: 'center',
                alignSelf: 'center', alignContent: 'center', height: 25, bottom: 10,
              }}
                onPress={() => navigation.navigate('फोटोगैलरी')}>
                <View style={{
                }}>
                  <Text style={{ textAlign: 'center', color: red_color, fontWeight: '800' }}>सभी देख</Text>
                </View>
              </TouchableOpacity>



            </View>
            <View style={{ top: 30, bottom: 20, }}>
              <FlatList
                persistentScrollbar
                data={photosData?.data?.slice(0, 8)}
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                renderItem={photoGalleryItemTwo}
              />
            </View>
            <View style={{ borderBottomColor: medium_gray, borderBottomWidth: 2 }}></View>
          </View>
          {/* state */}
          <HomeUI
            categoryName="प्रदेश"
            data={stateData?.data}
            navigationScreen="प्रदेश"
            navigation={navigation}
          />

          {/* country */}
          <HomeUI
            categoryName="देश"
            data={countryData?.data}
            navigationScreen="देश"
            navigation={navigation}
          />

          
          {/* national */}
          <HomeUI
            categoryName="ब्लॉग"
            data={blogData?.data}
            navigationScreen="ब्लॉग"
            navigation={navigation}
          />
          {/* International */}
          <HomeUI
            categoryName="धर्म"
            data={religionData?.data}
            navigationScreen="धर्म"
            navigation={navigation}
          />
          {/* sports */}
          <HomeUI
            categoryName="खेल"
            data={sportsData?.data}
            navigationScreen="खेल"
            navigation={navigation}
          />
          {/* Business */}
          <HomeUI
            categoryName="बिज़नेस"
            data={businessData?.data}
            navigationScreen="बिज़नेस"
            navigation={navigation}
          />
         
          {/* Photo Gallery */}
          {/* <View>
            photo gallery  text

            <View style={commonstyles.photoview}>
              <View style={commonstyles.phototextview}>
                <View style={{ flex: 1.7 }}>
                  <Text style={commonstyles.ptext}>फोटो गैलरी</Text>
                </View>
              </View>
              photo gallery  Cards
              <View>
               
                <View>
                  <FlatList persistentScrollbar
                    data={photosData?.data?.slice(0, 8)}
                    showsHorizontalScrollIndicator={true}
                    horizontal={true}
                    renderItem={photoGalleryItemTwo}
                  />
                </View>

              </View>
            </View>
            more text
            <View style={commonstyles.moreview}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('फोटो गैलरी');
                }}>
                <Text style={commonstyles.moretext}>More . . .</Text>
              </TouchableOpacity>
            </View>
          </View> */}

          {/* videos Gallery */}
          <View>
            {/*videos  text*/}

            <View style={commonstyles.photoview}>
              <View style={commonstyles.phototextview}>
                <View style={{ flex: 1.7 }}>
                  <Text style={commonstyles.ptext}>वीडियो</Text>
                </View>
              </View>
              {/* videos  Cards*/}
              <View>
                <View>
                  <FlatList
                    data={videosData?.data}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    renderItem={videoGalleryitem}
                  />

                </View>

              </View>
            </View>
            {/* more text */}
            <View style={commonstyles.moreview}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('वीडियो');
                }}>
                <Text style={commonstyles.moretext}>More . . .</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* world */}
          <HomeUI
            categoryName="दुनिया"
            data={worldData?.data}
            navigationScreen="दुनिया"
            navigation={navigation}
          />

         
          {/* entertainment */}
          <HomeUI
            categoryName="एंटरटेनमेंट"
            data={entertainmentData?.data}
            navigationScreen="एंटरटेनमेंट"
            navigation={navigation}
          />
                 </View>
      </ScrollView >
    </SafeAreaView >
  );
};

type Props = {
  sliderData: Function,
  loading: Boolean,
  latestNews: Function,
  latestLoading: Boolean,
  cinemaData: Function,
  cinemaLoading: Boolean,
  rasiPhalaluData: Function,
  rasiPhalaluLoading: Boolean,
  cartoonData: Function,
  cartoonLoading: Boolean,
  healthData: Function,
  healthLoading: Boolean,
  countryData: Function,
  countryLoading: Boolean,
  stateData: Function,
  stateLoaing: Boolean,
  chhattisgarhData: Function,
  chhattisgarhLoading: Boolean,
  blogData: Function,
  blogLoading: Boolean,
  religionData: Function,
  religionLoading: Boolean,
  sportsData: Function,
  sportsLoading: Boolean,
  businessData: Function,
  businessLoading: Boolean,
  upData: Function,
  upLoading: Boolean,
  worldData: Function,
  worldLoading: Boolean,
  khabarbebakData: Function,
  khabarbebakLoading: Boolean,
  madhyapradeshData: Function,
  madhyapradeshLoading: Boolean,
  cityData: Function,
  cityLoading: Boolean,
  entertainmentData: Function,
  entertainmentLoading: Boolean,
  hpData: Function,
  hpLoading: Boolean,
};

export default Home;
