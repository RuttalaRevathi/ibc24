/* eslint-disable prettier/prettier */

import {
    GET_UP,
    GET_UP_SUCCESS,
    GET_UP_ERROR,
  } from '../actions/getUpAction';

  const initialState = {
    upData: [],
    upLoading: false,
    error: false,
  };

  function upReducer(state = initialState, action) {
    switch (action.type) {
      case GET_UP:
        return {...state, upLoading: true};
      case GET_UP_SUCCESS:
        return {...state, upData: action.payload, upLoading: false};
              case GET_UP_ERROR:
  return {...state, upLoading: true, error: true};
      default:
        return state;
    }
  }

  export default upReducer;
