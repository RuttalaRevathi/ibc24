/* eslint-disable prettier/prettier */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import sliderReducer from '../redux/reducers/sliderReducer';
import latestNewsReducer from '../redux/reducers/latestNewsReducer';
import countryReducer from './reducers/countryReducer';
import cinemaReducer from '../redux/reducers/cinemaReducer';
import rasiPhalauReducer from '../redux/reducers/rasiPhalauReducer';
import cartoonReducer from '../redux/reducers/cartoonReducer';
import healthReducer from '../redux/reducers/healthReducer';
import stateReducer from './reducers/stateReducer';
import chhattisgarhReducer from './reducers/chhattisgarhReducer';
import blogReducer from './reducers/blogReducer';
import religionReducer from './reducers/religionReducer';
import sportsReducer from '../redux/reducers/sportsReducer';
import businessReducer from '../redux/reducers/businessReducer';
import upReducer from './reducers/upReducer';
import relatedReducer from '../redux/reducers/relatedReducer';
import photosGalleryReducer from '../redux/reducers/photosGalleryReducer';
import worldReducer from '../redux/reducers/worldReducer';
import khabarBebakReducer from './reducers/khabarBebakReducer';
import madhyapradeshReducer from './reducers/madhyapradeshReducer';
import cityReducer from './reducers/cityReducer';
import entertainmentReducer from './reducers/entertainmentReducer';
import hpReducer from './reducers/hpReducer';
import videoReducer from '../redux/reducers/videoReducer';
import bhopalReducer from './reducers/bhopalReducer';
import indorReducer from './reducers/indorReducer';
import jabalpurReducer from '../redux/reducers/jabalpurReducer';
import gwaliorReducer from './reducers/gwaliorReducer';
import raipurReducer from './reducers/raipurReducer';
import bilaspurReducer from './reducers/bilaspurReducer';
import biharReducer from './reducers/biharReducer';
import maharashtraReducer from './reducers/maharashtraReducer';
import haryanaReducer from './reducers/haryanaReducer';
import articleDetailReducer from '../redux/reducers/articleDetailReducer';
import punjabReducer from './reducers/punjabReducer';
import newsReducer from '../redux/reducers/newsReducer';
import menuReducer from '../redux/reducers/menuReducer';
import sarkariyojanaReducer from '../redux/reducers/sarkariyojanaReducer';
import assemblyelectionReducer from '../redux/reducers/assemblyelectionReducer';
import webstoriesReducer from '../redux/reducers/webstoriesReducer';

const rootReducer = combineReducers({sliderReducer,latestNewsReducer,countryReducer,
cinemaReducer,rasiPhalauReducer,cartoonReducer,healthReducer,stateReducer,chhattisgarhReducer,
blogReducer,religionReducer,sportsReducer,businessReducer,upReducer,relatedReducer,
photosGalleryReducer,worldReducer,khabarBebakReducer,madhyapradeshReducer,cityReducer,
entertainmentReducer,hpReducer,videoReducer,bhopalReducer,indorReducer,jabalpurReducer,
gwaliorReducer,raipurReducer,bilaspurReducer,biharReducer,maharashtraReducer,haryanaReducer,
articleDetailReducer,punjabReducer,newsReducer,menuReducer,sarkariyojanaReducer,assemblyelectionReducer,
webstoriesReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
