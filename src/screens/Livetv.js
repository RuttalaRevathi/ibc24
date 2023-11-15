/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';

const LiveTVScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [liveTVData, setLiveTVData] = useState([]);

  useEffect(() => {
    const fetchLiveTVData = async () => {
      try {
        const response = await fetch('https://www.ibc24.in/wp-json/api/v1/live-tv');
        const data = await response.json();

        setLiveTVData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching live TV data:', error);
        setIsLoading(false);
      }
    };

    fetchLiveTVData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live TV</Text>
      <AutoHeightWebView
        style={{ marginBottom: 20, marginLeft: 10 }}
        javaScriptEnabled={true}
        scalesPageToFit={false}
        customStyle={`
                
          #my_video_2 {
            width:98% !important;
            height:400px;
            margin:auto !important
          }
         
        `}
        source={{ html: liveTVData.data.content, baseUrl: 'https://instagram.com' }}
        viewportContent={'width=device-width, user-scalable=no'}
        onError={(error) => console.error('WebView Error:', error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default LiveTVScreen;
