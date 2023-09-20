/* eslint-disable prettier/prettier */
// src/screens/NewsListScreen.js

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

function NewsListScreen() {
  const filteredNews = useSelector((state) => state.news.filteredNews);

  return (
    <View>
      {filteredNews.map((article) => (
        <View key={article.id}>
          <Text>{article.title}</Text>
          <Text>{article.description}</Text>
        </View>
      ))}
    </View>
  );
}

export default NewsListScreen;
