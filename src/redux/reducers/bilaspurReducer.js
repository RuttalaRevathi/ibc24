/* eslint-disable prettier/prettier */
import {
    GET_BILASPUR,
    GET_BILASPUR_SUCCESS,
    GET_BILASPUR_ERROR,
  } from '../actions/getBilaspurAction';



  const initialState = {
    bilaspurData: [],
    bilaspurLoading: false,
  };

  // adilabad
  function  bilaspurReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BILASPUR:
        return { ...state, bilaspurLoading: false };
      case GET_BILASPUR_SUCCESS:
        return { ...state, bilaspurData: action.payload, bilaspurLoading: true };
      case GET_BILASPUR_ERROR:
        return { ...state, bilaspurLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (bilaspurReducer);

