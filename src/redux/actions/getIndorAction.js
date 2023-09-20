/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Indor,} from '../../utilities/urls';

/* eslint-disable prettier/prettier */
export const GET_INDOR_SUCCESS = 'GET_INDOR_SUCCESS';
export const GET_INDOR_ERROR = 'GET_INDOR_ERROR';
export const GET_INDOR = 'GET_INDOR';

export const getIndorAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_INDOR,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Indor, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_INDOR_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_INDOR_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
