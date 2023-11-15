/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, StyleSheet, Modal, Text, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './src/redux/store';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getCinemaAction from './src/redux/actions/getCinemaAction';
import getRasiPhalaluAction from './src/redux/actions/getRasiPhalaluAction';
import getCartoonAction from './src/redux/actions/getCartoonAction';
import getHealthAction from './src/redux/actions/getHealthAction';
import getPhotoGalleryAction from './src/redux/actions/getPhotoGalleryAction';
import { getIndorAction } from './src/redux/actions/getIndorAction';
import { getGwaliorAction } from './src/redux/actions/getGwaliorAction';
import { getRaipurAction } from './src/redux/actions/getRaipurAction';
import { getBilaspurAction } from './src/redux/actions/getBilaspurAction';
import { getBiharAction } from './src/redux/actions/getBiharAction';
import { getMaharashtraAction } from './src/redux/actions/getMaharashtraAction';
import { getHaryanaAction } from './src/redux/actions/getHaryanaAction';

import getCityAction from './src/redux/actions/getCityAction';
import getStateAction from './src/redux/actions/getStateAction';
import getCountryAction from './src/redux/actions/getCountryAction';
import getWorldAction from './src/redux/actions/getWorldAction';
import getSportsAction from './src/redux/actions/getSportsAction';
import getBusinessAction from './src/redux/actions/getBusinessAction';
import getVideoAction from './src/redux/actions/getVideoAction';
import getEntertainmentAction from './src/redux/actions/getEntertainmentAction';
import getKhabarBebakAction from './src/redux/actions/getKhabarBebakAction';
import { getBhopalAction } from './src/redux/actions/getBhopalAction';
import { getJabalpurAction } from './src/redux/actions/getJabalpurAction';
import getChhattisgarhAction from './src/redux/actions/getChhattisgarhAction';
import getMadhyapradeshAction from './src/redux/actions/getMadhyapradeshAction';
import getUpAction from './src/redux/actions/getUpAction';
import getHpAction from './src/redux/actions/getHpAction';
import getPunjabAction from './src/redux/actions/getPunjabAction';
import { getSarkariyojanaAction } from './src/redux/actions/getSarkariyojanaAction';
import getBlogAction from './src/redux/actions/getBlogAction';
import getReligionAction from './src/redux/actions/getReligionAction';
import { getAssemblyelectionAction } from './src/redux/actions/getAssemblyelectionAction';
import NetInfo from '@react-native-community/netinfo';
import { TouchableOpacity } from 'react-native';
import { useState } from 'react';
import getWebstoriesAction from './src/redux/actions/getWebstoriesAction';

const ConnectionLostModal = ({ isVisible, onRetry }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => { }}
    >
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
          <Text style={{ fontSize: 18, marginBottom: 10 }}>Internet Connection Lost</Text>
          <Text>Please check your internet connection and try again.</Text>
          <TouchableOpacity onPress={onRetry} style={{ marginTop: 10 }}>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Retry</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const App = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(!isConnected);

  useEffect(() => {
    store.dispatch(getSliderAction());
    store.dispatch(getCityAction());
    store.dispatch(getLatestNewsAction());
    store.dispatch(getCinemaAction());
    store.dispatch(getRasiPhalaluAction());
    store.dispatch(getCartoonAction());
    store.dispatch(getHealthAction());
    store.dispatch(getCountryAction());
    store.dispatch(getStateAction());
    store.dispatch(getChhattisgarhAction());
    store.dispatch(getBlogAction());
    store.dispatch(getReligionAction());
    store.dispatch(getSportsAction());
    store.dispatch(getBusinessAction());
    store.dispatch(getUpAction());
    store.dispatch(getWorldAction());
    store.dispatch(getKhabarBebakAction());
    store.dispatch(getMadhyapradeshAction());
    store.dispatch(getEntertainmentAction());
    store.dispatch(getVideoAction());
    store.dispatch(getPhotoGalleryAction());
    store.dispatch(getIndorAction());
    store.dispatch(getJabalpurAction());
    store.dispatch(getGwaliorAction());
    store.dispatch(getRaipurAction());
    store.dispatch(getBilaspurAction());
    store.dispatch(getBiharAction());
    store.dispatch(getMaharashtraAction());
    store.dispatch(getHaryanaAction());
    store.dispatch(getBhopalAction());
    store.dispatch(getHpAction());
    store.dispatch(getPunjabAction());
    store.dispatch(getSarkariyojanaAction());
    store.dispatch(getAssemblyelectionAction);
    store.dispatch(getWebstoriesAction());
    //hides the splash screen on app load.
  }, []);

  useEffect(() => {
    const checkConnection = async () => {
      const { isConnected } = await NetInfo.fetch();
      setIsConnected(isConnected);
    };

    const handleConnectivityChange = (state) => {
      setIsConnected(state.isConnected);
      if (!state.isConnected) {
        setIsModalVisible(true);
        // Optionally, you can show an alert as well
        Alert.alert(
          'Internet Connection Lost',
          'Please check your internet connection and try again.',
          [{ text: 'Retry', onPress: () => handleRetry() }]
        );
      } else {
        setIsModalVisible(false);
      }
    };

    // Check initial connection
    checkConnection();

    // Subscribe to network state changes
    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

    return () => {
      unsubscribe();
    };
  }, []);

  const handleRetry = () => {
    // Implement your retry logic here
    // For example, you can fetch data or perform an action that requires an internet connection
    // If the action is successful, you can close the modal
    setIsModalVisible(false);
  };


  return (
    <Provider store={store}>
      <ConnectionLostModal isVisible={isModalVisible} onRetry={handleRetry} />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>

    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
