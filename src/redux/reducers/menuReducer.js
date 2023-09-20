/* eslint-disable prettier/prettier */
import {
    GET_MENU_DATA,
    GET_MENU_DATA_ERROR,
    GET_MENU_DATA_SUCCESS,
  } from '../actions/getMenuAction';
  
  const initialState = {
    menuData: [],
    menuloading: false,
    error: false,
  };
  function menuReducer(state = initialState, action) {
    switch (action.type) {
      case GET_MENU_DATA:
        return {...state, menuloading: true};
      case GET_MENU_DATA_SUCCESS:
        return {...state, menuData: action.payload, menuloading: false};
      case GET_MENU_DATA_ERROR:
        return {...state, menuloading: true, error: false};
      default:
        return state;
    }
  }
  

  export default menuReducer;
  