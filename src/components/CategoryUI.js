/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Share,
  ActivityIndicator,
} from 'react-native';
import { appThemeColor, commonstyles } from '../styles/commonstyles';
import SubHeader from '../components/SubHeader';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import { ShareUrl } from '../utilities/urls';
import FastImage from 'react-native-fast-image';
import CategoryComponentOne from './CategoryComponentOne';
import CategoryComponentTwo from './CategoryComponentTwo';

function CategoryUI(props, { navigation }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(10);

  useEffect(() => {
    // Use props.data?.data as the source of articles
    if (props.data?.data) {
      setArticles(props.data?.data);
    }
  }, [props.data?.data]);

  const renderItemTwo = ({ item }) => (
    <CategoryComponentTwo
      item={item}
      propsdata={props.data?.data}
      navigation={props?.navigation}
    />
  );

  const loadMoreArticles = () => {
    setPage(page + 1);
  };
  {
    }
  return (
    <SafeAreaView style={commonstyles.container}>
      <ScrollView style={commonstyles.scroll}>
        <View>
          {articles.length !== 0 ? (
            <View style={{ position: 'relative',marginStart:10 }}>
              <FlatList
                style={commonstyles.cateflist}
                data={articles}
                renderItem={renderItemTwo}
                keyExtractor={(item) => item.id.toString()}
                onEndReached={loadMoreArticles}
                onEndReachedThreshold={0.1}
                ListFooterComponent={loading && <ActivityIndicator />}
              />
            </View>
          ) : (
            <View style={commonstyles.spinnerView}>
              <ActivityIndicator color={appThemeColor} size='large' />
              <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoryUI;
