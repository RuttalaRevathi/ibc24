/* eslint-disable prettier/prettier */

import {
    GET_CHHATTISGARH,
    GET_CHHATTISGARH_SUCCESS,
    GET_CHHATTISGARH_ERROR,
  } from '../actions/getChhattisgarhAction';

  const initialState = {
    chhattisgarhData: [],
    chhattisgarhLoading: false,
    error: false,
  };

  function chhattisgarhReducer(state = initialState, action) {
    switch (action.type) {
      case GET_CHHATTISGARH:
        return {...state, chhattisgarhLoading: true};
      case GET_CHHATTISGARH_SUCCESS:
        return {...state, chhattisgarhData: action.payload, chhattisgarhLoading: false};
              case GET_CHHATTISGARH_ERROR:
  return {...state, chhattisgarhLoading: true, error: true};
      default:
        return state;
    }
  }

  export default chhattisgarhReducer;
