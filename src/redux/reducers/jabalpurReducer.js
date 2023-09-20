/* eslint-disable prettier/prettier */
import {
    GET_JABALPUR,
    GET_JABALPUR_SUCCESS,
    GET_JABALPUR_ERROR,
  } from '../actions/getJabalpurAction';
  
  const initialState = {
    jabalpurData: [],
    jabalpurLoading: false,
  };
  
  // adilabad
  function jabalpurReducer(state = initialState, action) {
    switch (action.type) {
      case GET_JABALPUR:
        return { ...state, jabalpurLoading: false };
      case GET_JABALPUR_SUCCESS:
        return { ...state, jabalpurData: action.payload, jabalpurLoading: true };
      case GET_JABALPUR_ERROR:
        return { ...state, jabalpurLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (jabalpurReducer);
  