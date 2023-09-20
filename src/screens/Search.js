/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */


import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { connect, useDispatch, useSelector } from 'react-redux';
import { setCategoryFilter } from '../redux/actions/newsActions';
import { Dark_Gray, Gary_Light, blackcolor, commonstyles, medium_gray } from '../styles/commonstyles';
import { BaseUrl, MenuUrl } from '../utilities/urls';
import getMenuAction from '../redux/actions/getMenuAction';


const SearchScreen = ({ navigation,
    // menuData,
    menuloading ,
    setCategoryFilter,}
    : Props) => {
    const [text, setText] = useState('');
    const [showCancel, setShowCancel] = useState(false);
    const [menuData, setMenuData] = useState([]);
    // menuData = useSelector(state => state.menuReducer.menuData);
    // menuloading = useSelector(state => state.menuReducer.menuloading);

    useEffect(() => {
        fetch(BaseUrl + MenuUrl)
            .then((response) => response.json())
            .then(responseJson => {
                // JSON.stringify(responseJson)
                if (Array.isArray(responseJson) && responseJson.length > 0) {
                    const firstItem = responseJson;
                    setMenuData(firstItem);
                    // console.log(firstItem);
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleInputChange = (inputText) => {
        setText(inputText);
        setShowCancel(!!inputText); // Show the cancel image if inputText is not empty
    };

    const clearInput = () => {
        setText('');
        setShowCancel(false);
    };
    // Filter the menuData based on the input text
    const filteredMenuData = menuData.filter(item => item.title.includes(text));


    return (
        <ScrollView>
        <View style={commonstyles.container}>
            <View style={{ flexDirection: 'row', margin: 5 }}>
                <View style={{
                    flexDirection: 'row', marginRight: 40, backgroundColor: medium_gray,
                    width: '100%', height: 50,
                }}>
                    <View style={{ justifyContent: 'flex-start', start: 10, marginVertical: 15 }}>
                        <Image
                            style={{ height: 20, width: 20, right: 5, marginLeft: 5, }}
                            source={require('../Assets/Images/search.png')}
                        />
                    </View>
                    <View style={{
                        right: 5, marginLeft: 15, width: '90%',
                        height: 50,
                        borderRadius: 5,
                        fontSize: 21,
                        fontWeight: 'bold',
                        color: 'black',
                        flexDirection: 'row'
                    }}>
                        <TextInput placeholder="विषय, शहर या राज्य खोजे"
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
                                        style={{
                                            width: 20,
                                            height: 20,
                                            marginLeft: 5,
                                        }}

                                    />
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </View>
            {/* flatlist */}
            <View style={{  }}>
                <FlatList
                    data={filteredMenuData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) =>
                        <View style={{borderBottomColor: medium_gray, borderBottomWidth:1}}>
                            <Text style={{ color: blackcolor, fontSize: 16,fontWeight:'700',margin:10 }}>
                                {item.title}
                            </Text>
                        </View>
                    } />
            </View>
        </View>
        </ScrollView>
    );
}

type Props = {
    menuData: Function,
    menuloading: Boolean,


};

const mapStateToProps = state => ({
    menuData: state.menuReducer?.menuData,
    menuloading: state.menuReducer?.menuloading,

});
const mapDispatchToProps = {
    getMenuAction,
    setCategoryFilter,
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
