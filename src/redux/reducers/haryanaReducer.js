/* eslint-disable prettier/prettier */

import {
    GET_HARYANA,
    GET_HARYANA_SUCCESS,
    GET_HARYANA_ERROR,
  } from '../actions/getHaryanaAction';

  const initialState = {
    haryanaData: [],
    haryanaLoading: false,
  };

  function haryanaReducer(state = initialState, action) {
    switch (action.type) {
      case GET_HARYANA:
        return { ...state, haryanaLoading: false };
      case GET_HARYANA_SUCCESS:
        return { ...state, haryanaData: action.payload, haryanaLoading: true };
      case GET_HARYANA_ERROR:
        return { ...state, haryanaLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (haryanaReducer);

