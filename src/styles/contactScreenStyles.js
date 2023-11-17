/* eslint-disable prettier/prettier */
import { StyleSheet, Dimensions } from 'react-native';
import { appThemeColor, blackcolor, gallerycolor, graycolor, whitecolor } from '../styles/commonstyles';
const screenWidth = Dimensions.get('window').width;

export const ContactStyles = StyleSheet.create({

    Container: {
        backgroundColor: graycolor,
        height: '100%',
    },
    maincontainer: {
        backgroundColor: whitecolor, height: 'auto', margin: 10,
    },
    labelview: {
        backgroundColor: gallerycolor, width: 140,
        height: 50, alignSelf: 'flex-end',
    },
    label: {
        color: whitecolor, alignItems: 'center', textAlign: 'center',
        fontSize: 20, fontWeight: '700', marginVertical: 10
    },

    contentmainview: { marginTop: 10, marginStart: 10 },

    contentview: { flexDirection: 'row', bottom: 10, width: '90%' },

    image: { width: 20, height: 20, top: 6 },

    text: { color: blackcolor, fontSize: 18, fontWeight: '600', left: 5, lineHeight: 30 },
    title: {
        fontFamily: 'RobotoCondensed-Regular', fontSize: 20,
        color: blackcolor, fontWeight: 'bold', marginBottom: 10, marginTop: 10
    },

    content: {
         fontSize: 18,fontWeight:'400',
        color: blackcolor, textAlign: 'justify', marginBottom: 20
    },
    subView: { paddingBottom: 70, margin: 10 },
    mainView: {
        backgroundColor: whitecolor,
        height: '100%'
    },
    text2:{color:blackcolor,fontFamily:'RobotoCondensed-Regular',fontSize:18,fontWeight:'600'},

})