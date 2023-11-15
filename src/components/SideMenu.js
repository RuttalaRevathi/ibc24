/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert, SafeAreaView, TouchableHighlight, Linking, StyleSheet, Button } from 'react-native';
import { DrawerItem } from '@react-navigation/drawer';
import { StackActions } from '@react-navigation/native';
import { appThemeColor, blackcolor, graycolor, whitecolor } from '../styles/commonstyles';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import { ScrollView } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import FastImage from 'react-native-fast-image';
import { HeaderStyle } from '../styles/Header.Styles';

export default class SideMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DrawerItem: false,
            StateItem: false,
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
        const { isNightMode, toggleNightMode } = this.context;
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1 }}>

                    <View style={{ backgroundColor: whitecolor, alignSelf: 'flex-end', padding: 10 }}>
                        {/* <View style={[styles.container, isNightMode && styles.nightMode]}>
                            <Text style={styles.text}>Hello, React Native!</Text>
                            <Button title="Toggle Night Mode" onPress={toggleNightMode} />
                        </View> */}
                        <View style={{ width: '90%' }}>
                            <TouchableOpacity onPress={() => {
                                this.props.navigation.closeDrawer();
                            }}>

                                <Image style={{ width: 25, height: 25 }}
                                    source={require('../Assets/Images/cancel.png')} />

                            </TouchableOpacity>
                        </View>
                    </View>


                    <ScrollView style={{}}>
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
                        {/* youtube channels */}
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/national.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="देश"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('देश');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/international.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="दुनिया"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('दुनिया');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/sports.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="खेल"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('खेल');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/video.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="वीडियो"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('वीडियो');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/photos.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="फोटो गैलरी"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('फोटो गैलरी');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/business.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="बिज़नेस"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('बिज़नेस');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/entertainment.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="एंटरटेनमेंट"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('एंटरटेनमेंट');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/health.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="Khabar Bebak"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Khabar Bebak');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/home.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="सरकारी योजना"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('सरकारी योजना');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/editpage.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="ब्लॉग"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('ब्लॉग');
                            }}
                        />
                        <DrawerItem
                            style={sideMenuStyle.item}
                            icon={({ color, size }) => (
                                <Image
                                    source={require('../Assets/Images/sidemenuIcons/religion.png')}
                                    style={sideMenuStyle.icon}
                                />
                            )}
                            label="धर्म"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('धर्म');
                            }}
                        />

                        {/*contact screens  */}
                        <DrawerItem
                            // style={sideMenuStyle.item}

                            label="Complaints"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Complaints');
                            }}
                        />
                        <DrawerItem
                            // style={sideMenuStyle.item}

                            label="Contact Us"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Contact');
                            }}
                        />
                        <DrawerItem
                            // style={sideMenuStyle.item}

                            label="Terms and Conditions"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Terms');
                            }}
                        />
                        <DrawerItem
                            // style={sideMenuStyle.item}

                            label="Privacy Policy"
                            labelStyle={sideMenuStyle.text}
                            onPress={() => {
                                this.props.navigation.navigate('Privacy');
                            }}
                        />

                        <DrawerItem
                            label="App Version - V1.0"
                            labelStyle={{
                                color: 'black',
                                fontFamily: 'Mandali-Regular',
                                fontSize: 16
                            }}
                        />







                    </ScrollView>

                </View >
            </SafeAreaView>
        );

    }


}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white', // Default background color for day mode
    },
    nightMode: {
      backgroundColor: 'black', // Background color for night mode
    },
    text: {
      fontSize: 20,
      color: 'black', // Text color for day mode
    },
  });