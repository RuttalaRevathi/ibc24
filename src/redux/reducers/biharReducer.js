/* eslint-disable prettier/prettier */
import {
    GET_BIHAR,
    GET_BIHAR_SUCCESS,
    GET_BIHAR_ERROR,
  } from '../actions/getBiharAction';

  const initialState = {
    biharData: [],
    biharLoading: false,
  };

  // adilabad
  function  biharReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BIHAR:
        return { ...state, biharLoading: false };
      case GET_BIHAR_SUCCESS:
        return { ...state, biharData: action.payload, biharLoading: true };
      case GET_BIHAR_ERROR:
        return { ...state, biharLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (biharReducer);

