/* eslint-disable prettier/prettier */
import {BaseUrl, Bihar, CategoryUrl} from '../../utilities/urls';

export const GET_BIHAR = 'GET_BIHAR';
export const GET_BIHAR_SUCCESS = 'GET_BIHAR_SUCCESS';
export const GET_BIHAR_ERROR = 'GET_BIHAR_ERROR';

export const getBiharAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_BIHAR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Bihar, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_BIHAR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_BIHAR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
