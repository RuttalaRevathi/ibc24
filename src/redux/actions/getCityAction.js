/* eslint-disable prettier/prettier */

import { City, BaseUrl, CategoryUrl} from '../../utilities/urls';

export const GET_CITY_SUCCESS = 'GET_CITY_SUCCESS';
export const GET_CITY_ERROR = 'GET_CITY_ERROR';
export const GET_CITY = 'GET_CITY';

 const getCityAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_CITY,
        });
        const result = await fetch(BaseUrl + CategoryUrl + City, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_CITY_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_CITY_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getCityAction;
