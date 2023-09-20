/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Gwalior} from '../../utilities/urls';

export const GET_GWALIORR = 'GET_GWALIORR';
export const GET_GWALIORR_SUCCESS = 'GET_GWALIORR_SUCCESS';
export const GET_GWALIORR_ERROR = 'GET_GWALIORR_ERROR';

export const getGwaliorAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_GWALIORR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Gwalior, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_GWALIORR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_GWALIORR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
