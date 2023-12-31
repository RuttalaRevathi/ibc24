/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, View, SafeAreaView, Linking, Image, ScrollView, TouchableOpacity } from 'react-native';
import SubHeader from '../../components/SubHeader';
import { blackcolor, commonstyles, gallerycolor, whitecolor } from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';


export default class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        const salesMail = () => {
            Linking.openURL('mailto:Sales@ibc24.in');
        };
        const assignmentMail = () => {
            Linking.openURL('mailto:Assignment@ibc24.in');
        };
        const hrMail = () => {
            Linking.openURL('mailto:Hr@ibc24.in');
        };
        const salesContact = () => {
            Linking.openURL('tel:0771-4008700');
        };
        return (
            <SafeAreaView style={commonstyles.container}>

                <SubHeader title={'Contact Us '} isMenu={false} isBook={false} isShare={false}
                    leftBtnClick={() => this.props.navigation.goBack()}

                />

                <View style={ContactStyles.Container}>
                    <ScrollView style={{ marginBottom: 130 }}>
                        <View style={{}}>
                            <View style={ContactStyles.maincontainer}>
                                <View style={ContactStyles.labelview}>
                                    <Text style={ContactStyles.label}>Sales Related</Text>
                                </View>
                                <View style={ContactStyles.contentmainview}>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/email.png')} />
                                        <TouchableOpacity onPress={salesMail}>
                                            <Text style={ContactStyles.text}> Email : Sales@ibc24.in</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/contact.png')} />
                                        <TouchableOpacity onPress={salesContact}>
                                            <Text style={ContactStyles.text}> Contact number : 0771-4008700</Text>
                                   </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={ContactStyles.maincontainer}>
                                <View style={ContactStyles.labelview}>
                                    <Text style={ContactStyles.label}>News Related</Text>
                                </View>
                                <View style={ContactStyles.contentmainview}>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/email.png')} />
                                       <TouchableOpacity onPress={assignmentMail}>
                                        <Text style={ContactStyles.text}>  Email :  Assignment@ibc24.in </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/contact.png')} />
                                        <TouchableOpacity onPress={salesContact}>
                                        <Text style={ContactStyles.text}>  Contact number:  0771-4008700 </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={ContactStyles.maincontainer}>
                                <View style={ContactStyles.labelview}>
                                    <Text style={ContactStyles.label}>HR Related</Text>
                                </View>
                                <View style={ContactStyles.contentmainview}>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/email.png')} />
                                       <TouchableOpacity onPress={hrMail}>
                                        <Text style={ContactStyles.text}>  Email :  Hr@ibc24.in </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/contact.png')} />
                                        <TouchableOpacity onPress={salesContact}>
                                        <Text style={ContactStyles.text}>  Contact number :  0771-4008700 </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={ContactStyles.maincontainer}>
                                <View style={ContactStyles.labelview}>
                                    <Text style={ContactStyles.label}>Head office</Text>
                                </View>
                                <View style={ContactStyles.contentmainview}>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/location.png')} />
                                        <Text numberOfLines={3}
                                            ellipsizeMode="tail" style={ContactStyles.text}>Postal Address :S.B MULTIMEDIA PVT LTD First Floor, Lodhipara Chowk, Raipur ,
                                            Chhattisgarh ,492001 ( C.G.) </Text>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/email.png')} />
                                        <TouchableOpacity onPress={salesMail}>
                                        <Text style={ContactStyles.text}>   Email : Sales@ibc24.in </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/contact.png')} />
                                       <TouchableOpacity onPress={salesContact}>
                                        <Text style={ContactStyles.text}>   Contact number : 0771-4008700 </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={ContactStyles.maincontainer}>
                                <View style={ContactStyles.labelview}>
                                    <Text style={ContactStyles.label}> Central Zone</Text>
                                </View>
                                <View style={ContactStyles.contentmainview}>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/location.png')} />
                                        <Text numberOfLines={3}
                                            ellipsizeMode="tail" style={ContactStyles.text}>Bhopal Address : 3rd Floor, Manya Arcade, Plot No - 30A Zone-II, M.P. NAGARBHOPAL - 462011
                                        </Text>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/email.png')} />
                                       <TouchableOpacity onPress={assignmentMail}>
                                        <Text style={ContactStyles.text}>   Email :  Assignment@ibc24.in  </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/contact.png')} />
                                       <TouchableOpacity onPress={salesContact}>
                                        <Text style={ContactStyles.text}>   Contact number :  0771-4008700  </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={ContactStyles.maincontainer}>
                                <View style={ContactStyles.labelview}>
                                    <Text style={ContactStyles.label}>North Zone
                                    </Text>
                                </View>
                                <View style={ContactStyles.contentmainview}>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/location.png')} />
                                        <Text numberOfLines={3}
                                            ellipsizeMode="tail" style={ContactStyles.text}>Postal Address : D-56, Sector - 2 Ground Floor, NOIDA, UP 201301.
                                        </Text>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/email.png')} />
                                        <TouchableOpacity onPress={hrMail}>
                                        <Text style={ContactStyles.text}>   Email :  Hr@ibc24.in  </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={ContactStyles.contentview}>
                                        <Image style={ContactStyles.image}
                                            source={require('../../Assets/Images/sidemenuIcons/contact.png')} />
                                        <TouchableOpacity onPress={salesContact}>
                                        <Text style={ContactStyles.text}>   Contact number :  0771-4008700  </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

            </SafeAreaView>
        );
    }
}