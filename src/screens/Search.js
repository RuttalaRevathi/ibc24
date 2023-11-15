/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import { BaseUrl, MenuUrl } from '../utilities/urls';

const SearchScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [showCancel, setShowCancel] = useState(false);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch(BaseUrl + MenuUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        if (Array.isArray(responseJson) && responseJson.length > 0) {
          setMenuData(responseJson);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleInputChange = (inputText) => {
    setText(inputText);
    setShowCancel(!!inputText); // Show the cancel button if inputText is not empty
  };

  const clearInput = () => {
    setText('');
    setShowCancel(false);
  };

  // Filter the menuData based on the input text
  const filteredMenuData = menuData.filter((item) =>
    item.title.toLowerCase().includes(text.toLowerCase())
  );

  const navigateToScreen = (item) => {
    let screenName = '';
  
    // Map the title to the corresponding screen name
    switch (item.title.toLowerCase()) {
      case 'home':
        screenName = 'Home';
        break;
      case 'शहर':
        screenName = 'City';
        break;
      case 'प्रदेश':
        screenName = 'State';
        break;
      case 'up news':
        screenName = 'Webstories'; // Assuming 'Webstories' is the corresponding screen name
        break;
      // Add more cases for other screens...
  
      default:
        // Handle default case or leave it empty if there's no default behavior
        break;
    }
  
    if (screenName) {
      // Use navigation.navigate to navigate to the specified screen
      navigation.navigate(screenName, { item });
    } else {
      console.warn(`No screen found for title: ${item.title}`);
    }
  };
  

    return (
      <ScrollView>
        <View>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <View style={{ flexDirection: 'row', marginRight: 40, backgroundColor: 'lightgray', width: '100%', height: 50 }}>
              <View style={{ justifyContent: 'flex-start', marginLeft: 5, marginVertical: 15 }}>
                <Image
                  style={{ height: 20, width: 20 }}
                  source={require('../Assets/Images/search.png')}
                />
              </View>
              <View style={{ marginLeft: 15, width: '90%', height: 50, borderRadius: 5, fontSize: 21, fontWeight: 'bold', color: 'black', flexDirection: 'row' }}>
                <TextInput
                  placeholder="Search topics, cities, or states"
                  placeholderTextColor="#63666A"
                  style={{ fontSize: 20 }}
                  onChangeText={handleInputChange}
                  value={text}
                />
                {showCancel && (
                  <View style={{ marginLeft: 'auto', marginVertical: 15 }}>
                    <TouchableOpacity onPress={clearInput}>
                      <Image
                        source={require('../Assets/Images/cancel.png')}
                        style={{ width: 20, height: 20, marginLeft: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
          {/* Flatlist */}
          <View>
            <FlatList
              data={filteredMenuData}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => navigateToScreen(item)}>
                  <View style={{ borderBottomColor: 'lightgray', borderBottomWidth: 1 }}>
                    <Text style={{ color: 'black', fontSize: 16, fontWeight: '700', margin: 10 }}>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </ScrollView>
    );
  };

  export default SearchScreen;
