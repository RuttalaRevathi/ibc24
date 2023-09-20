/* eslint-disable prettier/prettier */

import {
    GET_COUNTRY,
    GET_COUNTRY_SUCCESS,
    GET_COUNTRY_ERROR,
  } from '../actions/getCountryAction';

  const initialState = {
    countryData: [],
    countryLoading: false,
    error: false,
  };

  function countryReducer(state = initialState, action) {
    switch (action.type) {
      case GET_COUNTRY:
        return {...state, countryLoading: true};
      case GET_COUNTRY_SUCCESS:
        return {...state, countryData: action.payload, countryLoading: false};
              case GET_COUNTRY_ERROR:
  return {...state, countryLoading: true, error: true};
      default:
        return state;
    }
  }

  export default countryReducer;
