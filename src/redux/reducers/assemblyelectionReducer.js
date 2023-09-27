/* eslint-disable prettier/prettier */
import {
    GET_ASSEMBLYELECTION,
    GET_ASSEMBLYELECTION_SUCCESS,
    GET_ASSEMBLYELECTION_ERROR,
  } from '../actions/getAssemblyelectionAction';
  
  const initialState = {
    assemblyelectionData: [],
    assemblyelectionLoading: false,
  };
  
  
  function assemblyelectionReducer(state = initialState, action) {
    switch (action.type) {
      case GET_ASSEMBLYELECTION:
        return {...state, assemblyelectionLoading: false};
      case GET_ASSEMBLYELECTION_SUCCESS:
        return {...state, assemblyelectionData: action.payload, assemblyelectionLoading: true};
      case GET_ASSEMBLYELECTION_ERROR:
        return {...state, assemblyelectionLoading: false, error: true};
      default:
        return state;
    }
  }
  export default (assemblyelectionReducer);
  