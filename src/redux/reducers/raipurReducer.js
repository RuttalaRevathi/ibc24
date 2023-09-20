/* eslint-disable prettier/prettier */
import {
    GET_RAIPUR,
    GET_RAIPUR_SUCCESS,
    GET_RAIPUR_ERROR,
  } from '../actions/getRaipurAction';


  const initialState = {
    raipurData: [],
    raipurLoading: false,
  };

  // adilabad
  function  raipurReducer(state = initialState, action) {
    switch (action.type) {
      case GET_RAIPUR:
        return { ...state, raipurLoading: false };
      case GET_RAIPUR_SUCCESS:
        return { ...state, raipurData: action.payload, raipurLoading: true };
      case GET_RAIPUR_ERROR:
        return { ...state, raipurLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (raipurReducer);

