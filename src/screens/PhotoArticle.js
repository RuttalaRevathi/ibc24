/* eslint-disable no-return-assign */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, whitecolor } from '../styles/commonstyles';
import AutoHeightWebView from 'react-native-autoheight-webview';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import { WebView } from 'react-native-webview';


const screenWidth = Dimensions.get('window').width;

// let decode = require('html-entities-decoder');

const PhotoArticle = ({ navigation, relatedData, relatedLoading,
  sliderData,
  loading,
  latestNews,
  latestLoading, route }: Props) => {
  const dispatch = useDispatch();
  const result1 = route?.params?.item?.content?.rendered;
  var result = result1?.replace('lazyload', 'text/javascript');
  useEffect(() => {
    dispatch(getRelatedAction());
  }, []);
  useEffect(() => {
    // goToTop();
  }, []);
  const sharecall = (name) => {
    const Link_Url = route?.params?.item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .then((error) => console.log(error));
  };

  // let source1 = route?.params?.item?.content?.rendered?.replace(
  //   'lazyload',
  //   'text/javascript',
  // );
  // const goToTop = () => {
  //   this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  return (
    <View style={commonstyles.container}>
                <View >
                    <View style={HeaderStyle.subHeadercustom}>
                        <View style={{ flex: 0.3 }}>
                            <TouchableOpacity onPress={() => {
                                navigation.goBack();
                            }} style={{ zIndex: 999 }}>
                                <Image source={require('../Assets/Images/arrow.png')} style={{ width: 18, height: 18, top: 10 }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 5 }}>
                        <TouchableOpacity style={{ marginLeft: 'auto' }}
                            onPress={() => { sharecall(); }}>
                            <Image
                                resizeMode="contain"
                                source={require('../Assets/Images/share.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>

                        </View>
                    </View>
                </View>
                <ScrollView ref={(c,) => { this.scroll = c; }}
                    style={{ backgroundColor: 'pink' }}
                >
                    <View>


                        <View style={{ margin: 10, flex: 1 }}>
                            <HTMLView
                                value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
                                stylesheet={headerStyles}
                            />
                        </View>
                        <View>
                          {/* <Text>{route?.params?.item?.content?.rendered}</Text> */}
                          {/* <WebView source={{ html: result }}  />; */}
                            <AutoHeightWebView
                               androidLayerType="software"
                                style={{ width: Dimensions.get('window').width - 10,maxHeight:'100%'}}

                                customStyle={`
                                  * {
                                    font-family: 'JIMS';
                                    -webkit-user-select: none;
                                    -webkit-touch-callout: none; 
                                  }
                                  p {
                                    font-size: 16px;
                                    text-align:justify;
                                    
                                                                  }
                                                           
                                `}
                                source={{ html: result += "<style>@import url('https://fonts.googleapis.com/css2?family=Mandali&display=swap');p strong, span, p span{font-family: 'Mandali', sans-serif;}p,li{font-family: 'Mandali', sans-serif;line-height:1.6;padding:0px 8px;color:#000;font-weight:500;font-size:18px;};h1{font-family:'Mandali';font-size:12px !important;}</style>" }}
                                scalesPageToFit={false}
                                viewportContent={'width=device-width, user-scalable=no'}
                            />
                        </View>
                    </View>
                    <View />
                </ScrollView >

            </View >
  );
};
const styles = StyleSheet.create({
  p: {
    color: '#000',
    fontSize: 22,
    fontFamily: 'Mandali-Regular',
    lineHeight: 30,
  },
});
const headerStyles = StyleSheet.create({
  p: { color: whitecolor, fontSize: 26, fontFamily: 'Mandali-Bold', lineHeight: 37 },

});
const RelatedTextStyles = StyleSheet.create({
  p: { color: '#000', fontSize: 18, fontFamily: 'Mandali-Bold', lineHeight: 25, top: 10 },
});
type Props = {
  relatedData: Function,
  relatedLoading: Boolean,
  sliderData: Function,
  loading: Boolean,
  latestNews: Function,
  latestLoading: Boolean,

};

const mapStateToProps = state => ({
  relatedData: state.relatedReducer?.relatedData,
  relatedLoading: state.relatedReducer?.relatedLoading,
  sliderData: state.sliderReducer?.sliderData,
  loading: state.sliderReducer?.loading,
  latestNews: state.latestNewsReducer?.latestNews,
  latestLoading: state.latestNewsReducer?.latestLoading,
});
const mapDispatchToProps = {
  getRelatedAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(PhotoArticle);
