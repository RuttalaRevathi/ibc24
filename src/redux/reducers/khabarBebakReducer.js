/* eslint-disable prettier/prettier */

import {
    GET_KHABARBEBAK,
    GET_KHABARBEBAK_SUCCESS,
    GET_KHABARBEBAK_ERROR,
  } from '../actions/getKhabarBebakAction';

  const initialState = {
    khabarbebakData: [],
    khabarbebakLoading: false,
    error: false,
  };

  function khabarBebakReducer(state = initialState, action) {
    switch (action.type) {
      case GET_KHABARBEBAK:
        return {...state, khabarbebakLoading: true};
      case GET_KHABARBEBAK_SUCCESS:
        return {...state, khabarbebakData: action.payload, khabarbebakLoading: false};
              case GET_KHABARBEBAK_ERROR:
  return {...state, khabarbebakLoading: true, error: true};
      default:
        return state;
    }
  }

  export default khabarBebakReducer;
