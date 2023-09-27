/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Sarkariyojana} from '../../utilities/urls';

export const GET_SARKARIYOJANA = 'GET_SARKARIYOJANA';
export const GET_SARKARIYOJANA_SUCCESS = 'GET_SARKARIYOJANA_SUCCESS';
export const GET_SARKARIYOJANA_ERROR = 'GET_SARKARIYOJANA_ERROR';

export const getSarkariyojanaAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_SARKARIYOJANA,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Sarkariyojana, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_SARKARIYOJANA_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_SARKARIYOJANA_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
