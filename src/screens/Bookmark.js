/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appThemeColor, blackcolor, commonstyles, medium_gray } from '../styles/commonstyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class BookmarkScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarkedArticles: [],
        };
    }

    async componentDidMount() {
        try {
            const bookmarks = await AsyncStorage.getItem('bookmarks');
            if (bookmarks) {
                this.setState({
                    bookmarkedArticles: JSON.parse(bookmarks),
                });
            }
        } catch (error) {
            console.error('Error loading bookmarks:', error);
        }
    }

    render() {
        const { bookmarkedArticles } = this.state;

        return (
            <View style={commonstyles.container}>
                <FlatList
                    data={bookmarkedArticles}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{
                            borderBottomColor: medium_gray, borderBottomWidth: 2,
                            margin: 10, flexDirection: 'row'
                        }}>
                            {/* <View style={commonstyles.dot}>
                                <FontAwesome name="circle" size={10} color={appThemeColor} />
                            </View> */}
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.navigate('Details', {
                                    item: this.props.item,
                                    detailsData: this.props?.propsdata,
                                });
                            }}>
                                <View>
                                    <Text style={{
                                        color: blackcolor,
                                        fontSize: 18,
                                        fontFamily: 'Mandali-Bold',
                                        lineHeight: 30,
                                    }}>{item.title.redered}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        );
    }
}

export default BookmarkScreen;
