/* eslint-disable prettier/prettier */

import {
    GET_STATE,
    GET_STATE_SUCCESS,
    GET_STATE_ERROR,
  } from '../actions/getStateAction';

  const initialState = {
    stateData: [],
    stateLoading: false,
    error: false,
  };

  function stateReducer(state = initialState, action) {
    switch (action.type) {
      case GET_STATE:
        return {...state, stateLoading: true};
      case GET_STATE_SUCCESS:
        return {...state, stateData: action.payload, stateLoading: false};
              case GET_STATE_ERROR:
  return {...state, stateLoading: true, error: true};
      default:
        return state;
    }
  }

  export default stateReducer;
