/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Haryana} from '../../utilities/urls';

export const GET_HARYANA = 'GET_HARYANA';
export const GET_HARYANA_SUCCESS = 'GET_HARYANA_SUCCESS';
export const GET_HARYANA_ERROR = 'GET_HARYANA_ERROR';


export const getHaryanaAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_HARYANA,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Haryana, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_HARYANA_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_HARYANA_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
