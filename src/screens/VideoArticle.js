/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, ScrollView, FlatList, Share, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, commonstyles, Header_text, whitecolor } from '../styles/commonstyles';
import { HeaderStyle } from '../styles/Header.Styles';
import HTMLView from 'react-native-htmlview';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import getRelatedAction from '../redux/actions/getRelatedAction';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { useState } from 'react';

const screenWidth = Dimensions.get('window').width;

const VideoArticle = ({ navigation, route }: Props) => {
    const dispatch = useDispatch();
    const source = route?.params?.item?.content?.rendered;
    var source1 = source?.replace('lazyload', 'text/javascript');
    const [videoAvailable, setVideoAvailable] = useState(true);

   

    const sharecall = () => {
        const Link_Url = route?.params?.item?.link;
        Share.share({
            message: Link_Url,
        })
            .then((result) => console.log(result))
            .then((error) => console.log(error));
    };
    useEffect(() => {
        // Check if source1 contains a <video> or <iframe> element
        const videoOrIframeRegex = /<video|<iframe|blockquote/g;
        if (!videoOrIframeRegex.test(source1)) {
            setVideoAvailable(false);
        }
    }, [source1]);
    return (
        <View style={commonstyles.container}>
            <View>
                <View style={HeaderStyle.subHeadercustom}>
                    <View style={{ flex: 0.3 }}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('वीडियो');
                        }} style={{ zIndex: 999 }}>
                            <Image source={require('../Assets/Images/arrow.png')}
                                style={{ width: 18, height: 18, top: 10 }} />
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            flex: 0.6,
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            paddingTop: 5,
                        }}>
                        <TouchableOpacity style={{ marginLeft: 'auto' }}
                            onPress={() => { sharecall() }}>
                            <Image
                                resizeMode="contain"
                                source={require('../Assets/Images/share.png')}
                                style={{ width: 20, height: 20 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
            <View>
                    <View style={{ margin: 10, flex: 1 }}>
                        <HTMLView
                            value={'<p>' + route?.params?.item?.title?.rendered + '</p>'}
                            stylesheet={headerStyles}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', start: 10 }}>
                        <Text style={commonstyles.detailTime}>Edited By : </Text>
                        <Text style={commonstyles.detailTime}>{route?.params?.item?.author_name}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', start: 10,top:10 ,bottom:10}}>
                        <Text style={commonstyles.detailTime}>{(moment(route?.params?.item?.date_gmt).format('MMMM DD , YYYY'))} / </Text>
                        <Text style={commonstyles.detailTime}>{(moment(route?.params?.item?.date_gmt).utcOffset('+05:30').format('hh.mm A'))} IST  </Text>
                    </View>
                    <View>
                        <Image
                            source={{ uri: route?.params?.item?.web_featured_image }}
                            style={commonstyles.Detailslargecard}
                        />
                    </View>
                    {/* <Text>{source1}</Text> */}
                    {videoAvailable ? (
                    <AutoHeightWebView
                    style={{marginBottom:20,marginLeft:10}}
                        javaScriptEnabled={true}
                        scalesPageToFit={false}
                        customStyle={`
                        iframe[src^="https://www.youtube.com/embed/"] {
                                width:95% !important;
                             
                    }
                    p iframe{
                        margin-left:10
                        margin-right:10
                    }
                    video.wp-video-shortcode{
                        width:370px !important;
                        margin:auto !important

                    }
                    h1{
                        font-size:16
                    }
                     `}
                    source={{ html: source1, baseUrl: 'https://instagram.com', }}
                    viewportContent={'width=device-width, user-scalable=no'}
                    onError={(error) => console.error('WebView Error:', error)}
                    />
                    ) : (
                        <View style={{alignSelf:"center",margin:20,}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:blackcolor}}>Video not available</Text>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    p: { color: '#000', fontSize: 22, fontFamily: 'JIMS', lineHeight: 30 },

});
const headerStyles = StyleSheet.create({
    p: { color: appThemeColor, fontSize: 20, fontFamily: 'JIMS', lineHeight: 37,fontWeight:'700' },

});
const RelatedTextStyles = StyleSheet.create({
    p: { color: '#000', fontSize: 18, fontFamily: 'JIMS', lineHeight: 25, top: 10 },
});
      

export default VideoArticle;
