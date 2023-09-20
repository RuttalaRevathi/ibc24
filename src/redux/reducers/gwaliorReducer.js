/* eslint-disable prettier/prettier */
import {
    GET_GWALIORR,
    GET_GWALIORR_SUCCESS,
    GET_GWALIORR_ERROR,
  } from '../actions/getGwaliorAction';
  
  const initialState = {
    gwaliorData: [],
    gwaliorLoading: false,
  };
  
  // adilabad
  function  gwaliorReducer(state = initialState, action) {
    switch (action.type) {
      case GET_GWALIORR:
        return { ...state, gwaliorLoading: false };
      case GET_GWALIORR_SUCCESS:
        return { ...state, gwaliorData: action.payload, gwaliorLoading: true };
      case GET_GWALIORR_ERROR:
        return { ...state, gwaliorLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (gwaliorReducer);
  