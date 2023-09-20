/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Country } from '../../utilities/urls';

export const GET_COUNTRY_SUCCESS = 'GET_COUNTRY_SUCCESS';
export const GET_COUNTRY_ERROR = 'GET_COUNTRY_ERROR';
export const GET_COUNTRY = 'GET_COUNTRY';

 const getCountryAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_COUNTRY,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Country, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_COUNTRY_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_COUNTRY_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getCountryAction;
