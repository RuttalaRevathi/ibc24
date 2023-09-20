/* eslint-disable prettier/prettier */
import {
    GET_MAHARASHTRA,
    GET_MAHARASHTRA_SUCCESS,
    GET_MAHARASHTRA_ERROR,
  } from '../actions/getMaharashtraAction';

  const initialState = {
    maharashtraData: [],
    maharashtraLoading: false,
  };

  // adilabad
  function maharashtraReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MAHARASHTRA:
        return { ...state, maharashtraLoading: false };
      case GET_MAHARASHTRA_SUCCESS:
        return { ...state, maharashtraData: action.payload, maharashtraLoading: true };
      case GET_MAHARASHTRA_ERROR:
        return { ...state, maharashtraLoading: false, error: true };
      default:
        return state;
    }
  }
  export default (maharashtraReducer);

