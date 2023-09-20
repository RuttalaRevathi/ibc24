/* eslint-disable prettier/prettier */

import {
    GET_MADHYAPRADESH,
    GET_MADHYAPRADESH_SUCCESS,
    GET_MADHYAPRADESH_ERROR,
  } from '../actions/getMadhyapradeshAction';
  
  const initialState = {
    madhyapradeshData: [],
    madhyapradeshLoading: false,
    error: false,
  };

  function madhyapradeshReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MADHYAPRADESH:
        return {...state, madhyapradeshLoading: true};
      case GET_MADHYAPRADESH_SUCCESS:
        return {...state, madhyapradeshData: action.payload, madhyapradeshLoading: false};
              case GET_MADHYAPRADESH_ERROR:
  return {...state, madhyapradeshLoading: true, error: true};
      default:
        return state;
    }
  }

  export default madhyapradeshReducer;
