/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Raipur} from '../../utilities/urls';

export const GET_RAIPUR = 'GET_RAIPUR';
export const GET_RAIPUR_SUCCESS = 'GET_RAIPUR_SUCCESS';
export const GET_RAIPUR_ERROR = 'GET_RAIPUR_ERROR';

export const getRaipurAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_RAIPUR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Raipur, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_RAIPUR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_RAIPUR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
