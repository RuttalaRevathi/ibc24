/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView, TouchableHighlight, Linking } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/native';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawerItem: false,
            StateItem:false,
        };
    }
    CityNestedDrawerItem = () => {
        if (this.state.DrawerItem === true) {
            this.setState({ DrawerItem: false });
        }
        else {
            this.setState({ DrawerItem: true });
        }
    }
    StateNestedDrawerItem = () => {
        if (this.state.StateItem === true) {
            this.setState({ StateItem: false });
        }
        else {
            this.setState({ StateItem: true });
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1, paddingTop: 20, backgroundColor: whitecolor }}>

                    <ScrollView style={{}}>

                        {/* <View style={{ flexDirection: 'row',left: 5 }}>
                                <View>
                                    <Image style={{}} source={require('../Assets/Images/user.png')} />
                                </View>
                                <View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <Text>
                                            मेरा प्रोफाइल
                                        </Text>
                                        <Text>ibc24 से जुड़ें</Text>
                                    </View>
                                    </View>
                                    <View style={{
                                        height: 50, width: 80, backgroundColor: 'orange',
                                        justifyContent: 'center', borderRadius: 10, alignItems: 'center'
                                    }}>
                                        <Text style={{fontWeight:'600'}}>लॉग इन</Text>
                                    </View>
                               
                            </View>
                         */}
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/home.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="Home"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Home');
                            }}
                        />
{/* Cities */}
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/more.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label={({ color }) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text style={sideMenuStyle.text}>शहर</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.CityNestedDrawerItem(this.setState({ shouldShow: !this.state.shouldShow }));
                                        }}>
                                        <AntDesign
                                            name={this.state.shouldShow ? "upcircleo" : "downcircleo"}
                                            size={15}
                                            color={blackcolor}
                                            // style={{ top: 4}}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            labelStyle={sideMenuStyle.text}
                        />
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="भोपाल"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Bhopal');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="इंदौर"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Indor');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}
                                label="जबलपुर"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Jabalpur');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="ग्वालियर"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Gwalior');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="रायपुर"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Raipur');
                                }}
                            />
                        )}
                        {this.state.DrawerItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="बिलासपुर"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Bilaspur');
                                }}
                            />
                        )}
{/* Stetes */}
<DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/more.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label={({ color }) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                    }}>
                                    <View>
                                        <Text style={sideMenuStyle.text}>प्रदेश</Text>
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => {
                                            this.StateNestedDrawerItem(this.setState({ shouldShow: !this.state.shouldShow }));
                                        }}>
                                        <AntDesign
                                            name={this.state.shouldShow ? "upcircleo" : "downcircleo"}
                                            size={15}
                                            color={blackcolor}
                                            // style={{ top: 12 }}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                            labelStyle={sideMenuStyle.text}
                        />
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="छत्तीसगढ़"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Chhattisgarh');
                                }}
                            />
                        )}
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="मध्यप्रदेश"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Madhyapradesh');
                                }}
                            />
                        )}
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}
                                label="बिहार"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Bihar');
                                }}
                            />
                        )}
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="उत्तर प्रदेश"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Up');
                                }}
                            />
                        )}
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="महाराष्ट्र"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Maharashtra');
                                }}
                            />
                        )}
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="हिमाचल प्रदेश"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Hp');
                                }}
                            />
                        )}
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="हरयाणा"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Haryana');
                                }}
                            />
                        )}
                        {this.state.StateItem == true && (
                            <DrawerItem
                                style={sideMenuStyle.item}

                                label="पंजाब"
                                labelStyle={sideMenuStyle.Disttext}
                                onPress={() => {
                                    this.props.navigation.navigate('Punjab');
                                }}
                            />
                        )}
 {/*contact screens  */}
                        <DrawerItem
                            // style={sideMenuStyle.item}

                            label="Terms and Conditions"
                            labelStyle={sideMenuStyle.text}
                        // onPress={() => {
                        //     this.props.navigation.navigate('About');
                        // }}
                        />
                        <DrawerItem
                            // style={sideMenuStyle.item}

                            label="News Publisher Details"
                            labelStyle={sideMenuStyle.text}
                        // onPress={() => {
                        //     this.props.navigation.navigate('Privacy');
                        // }}
                        />

                        <DrawerItem
                            // style={[sideMenuStyle.item]}


                            label="App Version"

                            labelStyle={[sideMenuStyle.text]}
                        // onPress={() => {
                        //     this.props.navigation.navigate('Terms');
                        // }}
                        />







                    </ScrollView>

                </View >
            </SafeAreaView>
        );

    }


}
