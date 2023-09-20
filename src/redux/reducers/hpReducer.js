/* eslint-disable prettier/prettier */

import {
    GET_HP,
    GET_HP_SUCCESS,
    GET_HP_ERROR,
  } from '../actions/getHpAction';

  const initialState = {
    hpData: [],
    hpLoading: false,
    error: false,
  };

  function hpReducer(state = initialState, action) {
    switch (action.type) {
      case GET_HP:
        return {...state, hpLoading: true};
      case GET_HP_SUCCESS:
        return {...state, hpData: action.payload, hpLoading: false};
              case GET_HP_ERROR:
  return {...state, hpLoading: true, error: true};
      default:
        return state;
    }
  }

  export default hpReducer;
