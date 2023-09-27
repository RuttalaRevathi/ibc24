/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-web-swiper';
import InstaStory from 'react-native-insta-story';

import { SwiperFlatList } from 'react-native-swiper-flatlist';
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
} from 'react-native';
import getSliderAction from '../redux/actions/getSliderAction';

import {
  appThemeColor,
  blackcolor,
  commonstyles,
  ITEM_WIDTH,
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
import { getBiharAction} from '../redux/actions/getBiharAction';
import { getMaharashtraAction} from '../redux/actions/getMaharashtraAction';
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
// import { getBilaspurAction } from '../redux/actions/getBilaspurAction';


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
  nriData,
  nriLoading,
  worldData,
  worldLoading,
  khabarbebakData,
  khabarbebakLoading,
  madhyapradeshData,
  madhyapradeshLoading,
  cityData,
  cityLoading,
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
  nriData = useSelector(state => state.nriReducer.nriData);
  nriLoading = useSelector(state => state.nriReducer.nriLoading);
  worldData = useSelector(state => state.worldReducer.worldData);
  worldLoading = useSelector(state => state.worldReducer.worldLoading);
  khabarbebakData = useSelector(state => state.khabarBebakReducer.khabarbebakData);
  khabarbebakLoading = useSelector(state => state.khabarBebakReducer.khabarbebakLoading);
  madhyapradeshData = useSelector(state => state.madhyapradeshReducer.madhyapradeshData);
  madhyapradeshLoading = useSelector(state => state.madhyapradeshReducer.madhyapradeshLoading,);
  cityData = useSelector(state => state.cityReducer.cityData,);
  cityLoading = useSelector(state => state.cityReducer.cityLoading,);
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
  const dispatch = useDispatch();
  const [totalLoading, setTotalLoading] = useState(false);
  let decode = require('html-entities-decoder');



  const carouselItem = ({ item, index }) => (
    <HomeCarouselItem
      item={item}
      propsdata={sliderData?.data}
      navigation={navigation}
      index={activeIndex}

    />
  );
  const rasiPhalaluItemOne = ({ item, index }) => (
    <HomeRasiphalaluItemOne
      item={item}
      propsdata={rasiPhalaluData?.data}
      navigation={navigation}
      index={index}

    />
  );
  const rasiPhalaluItemTwo = ({ item, index }) => (
    <HomeRasiphalaluItemTwo
      item={item}
      propsdata={rasiPhalaluData?.data}
      navigation={navigation}
      index={index}

    />
  );


  const cartoonItem = ({ item, index }) => (
    <HomeCartoonItem
      item={item}
      propsdata={cartoonData?.data}
      navigation={navigation}
      index={index}

    />
  );
  const photoGalleryItemOne = ({ item, index }) => (
    <HomePhotogalleryItemOne
      item={item}
      propsdata={photosData?.data}
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
    // setAutoPlayState(false);
    // setActiveIndex(0);

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
      // setAutoPlayState(true);
      //      setActiveIndex(0);

    }, 3000);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
     
      <ScrollView style={commonstyles.scroll} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Text>Home</Text>
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
  nriData: Function,
  nriLoading: Boolean,
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
