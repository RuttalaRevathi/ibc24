/* eslint-disable prettier/prettier */
import {
    GET_INDOR,
    GET_INDOR_SUCCESS,
    GET_INDOR_ERROR,
  } from '../actions/getIndorAction';
  
  const initialState = {
    indorData: [],
    indorLoading: false,
  };
  
  // adilabad
  function indorReducer(state = initialState, action) {
    switch (action.type) {
      case GET_INDOR:
        return {...state, indorLoading: false};
      case GET_INDOR_SUCCESS:
        return {...state, indorData: action.payload, indorLoading: true};
      case GET_INDOR_ERROR:
        return {...state, indorLoading: false, error: true};
      default:
        return state;
    }
  }
  export default (indorReducer);
  