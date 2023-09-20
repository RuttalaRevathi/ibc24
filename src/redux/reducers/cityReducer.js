/* eslint-disable prettier/prettier */

import {
    GET_CITY,
    GET_CITY_SUCCESS,
    GET_CITY_ERROR,
  } from '../actions/getCityAction';

  const initialState = {
    cityData: [],
    cityLoading: false,
    error: false,
  };

  function cityReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CITY:
        return {...state, cityLoading: true};
      case GET_CITY_SUCCESS:
        return {...state, cityData: action.payload, cityLoading: false};
              case GET_CITY_ERROR:
  return {...state, cityLoading: true, error: true};
      default:
        return state;
    }
  }

  export default cityReducer;
