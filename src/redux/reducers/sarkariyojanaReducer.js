/* eslint-disable prettier/prettier */
import {
    GET_SARKARIYOJANA,
    GET_SARKARIYOJANA_SUCCESS,
    GET_SARKARIYOJANA_ERROR,
  } from '../actions/getSarkariyojanaAction';


  const initialState = {
    sarkariyojanaData: [],
    sarkariyojanaLoading: false,
  };

  // adilabad
  function  sarkariyojanaReducer(state = initialState, action) {
    switch (action.type) {
      case GET_SARKARIYOJANA:
        return { ...state, sarkariyojanaLoading: false };
      case GET_SARKARIYOJANA_SUCCESS:
        return { ...state, sarkariyojanaData: action.payload, sarkariyojanaLoading: true };
      case GET_SARKARIYOJANA_ERROR:
        return { ...state, sarkariyojanaLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (sarkariyojanaReducer);

