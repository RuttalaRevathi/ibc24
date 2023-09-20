/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Jabalpur} from '../../utilities/urls';

export const GET_JABALPUR = 'GET_JABALPUR';
export const GET_JABALPUR_SUCCESS = 'GET_JABALPUR_SUCCESS';
export const GET_JABALPUR_ERROR = 'GET_JABALPUR_ERROR';

export const getJabalpurAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_JABALPUR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Jabalpur, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_JABALPUR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_JABALPUR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
