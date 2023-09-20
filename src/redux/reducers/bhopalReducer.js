/* eslint-disable prettier/prettier */
import {
  GET_BHOPAL,
  GET_BHOPAL_SUCCESS,
  GET_BHOPAL_ERROR,
} from '../actions/getBhopalAction';

const initialState = {
  bhopalData: [],
  bhopalLoading: false,
};


function bhopalReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BHOPAL:
      return {...state, bhopalLoading: false};
    case GET_BHOPAL_SUCCESS:
      return {...state, bhopalData: action.payload, bhopalLoading: true};
    case GET_BHOPAL_ERROR:
      return {...state, bhopalLoading: false, error: true};
    default:
      return state;
  }
}
export default (bhopalReducer);
