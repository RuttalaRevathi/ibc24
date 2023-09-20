/* eslint-disable prettier/prettier */

import {
    GET_PUNJAB,
    GET_PUNJAB_SUCCESS,
    GET_PUNJAB_ERROR,
  } from '../actions/getPunjabAction';

  const initialState = {
    punjabData: [],
    punjabLoading: false,
    error: false,
  };

  function punjabReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PUNJAB:
        return {...state, punjabLoading: true};
      case GET_PUNJAB_SUCCESS:
        return {...state, punjabData: action.payload, punjabLoading: false};
              case GET_PUNJAB_ERROR:
  return {...state, punjabLoading: true, error: true};
      default:
        return state;
    }
  }

  export default punjabReducer;
