/* eslint-disable prettier/prettier */
import {BaseUrl, Bilaspur, CategoryUrl} from '../../utilities/urls';

export const GET_BILASPUR = 'GET_BILASPUR';
export const GET_BILASPUR_SUCCESS = 'GET_BILASPUR_SUCCESS';
export const GET_BILASPUR_ERROR = 'GET_BILASPUR_ERROR';

export const getBilaspurAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_BILASPUR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Bilaspur, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_BILASPUR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_BILASPUR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
