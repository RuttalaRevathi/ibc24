/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Uttarpradesh} from '../../utilities/urls';

export const GET_UP_SUCCESS = 'GET_UP_SUCCESS';
export const GET_UP_ERROR = 'GET_UP_ERROR';
export const GET_UP = 'GET_UP';

 const getUpAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_UP,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Uttarpradesh, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_UP_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_UP_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getUpAction;
