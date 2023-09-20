/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import HomeStackNavigator from './src/navigation/stack-navigators/HomeStackNavigator';
import {store} from './src/redux/store';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import getSliderAction from './src/redux/actions/getSliderAction';
import getLatestNewsAction from './src/redux/actions/getLatestNewsAction';
import getCinemaAction from './src/redux/actions/getCinemaAction';
import getRasiPhalaluAction from './src/redux/actions/getRasiPhalaluAction';
import getCartoonAction from './src/redux/actions/getCartoonAction';
import getHealthAction from './src/redux/actions/getHealthAction';
import getNationalAction from './src/redux/actions/getNationalAction';
import getInterNationalAction from './src/redux/actions/getInterNationalAction';
import getPhotoGalleryAction from './src/redux/actions/getPhotoGalleryAction';
import { getIndorAction} from './src/redux/actions/getIndorAction';
import { getGwaliorAction} from './src/redux/actions/getGwaliorAction';
import { getRaipurAction } from './src/redux/actions/getRaipurAction';
import { getBilaspurAction} from './src/redux/actions/getBilaspurAction';
import { getBiharAction } from './src/redux/actions/getBiharAction';
import { getMaharashtraAction } from './src/redux/actions/getMaharashtraAction';
import { getHaryanaAction} from './src/redux/actions/getHaryanaAction';

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

const App = () => {
  useEffect(() => {
    store.dispatch(getSliderAction());
    store.dispatch(getLatestNewsAction());
    store.dispatch(getCinemaAction());
    store.dispatch(getRasiPhalaluAction());
    store.dispatch(getCartoonAction());
    store.dispatch(getHealthAction());
    store.dispatch(getCountryAction());
    store.dispatch(getStateAction());
    store.dispatch(getChhattisgarhAction());
    store.dispatch(getNationalAction());
    store.dispatch(getInterNationalAction());
    store.dispatch(getSportsAction());
    store.dispatch(getBusinessAction());
    store.dispatch(getUpAction());
    store.dispatch(getWorldAction());
    store.dispatch(getKhabarBebakAction());
    store.dispatch(getMadhyapradeshAction());
    store.dispatch(getCityAction());
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

    //hides the splash screen on app load.
  }, []);

  return (
    <Provider store={store}>
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
