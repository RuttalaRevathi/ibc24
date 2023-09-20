/* eslint-disable prettier/prettier */
import {BaseUrl, CategoryUrl, Maharashtra} from '../../utilities/urls';

export const GET_MAHARASHTRA = 'GET_MAHARASHTRA';
export const GET_MAHARASHTRA_SUCCESS = 'GET_MAHARASHTRA_SUCCESS';
export const GET_MAHARASHTRA_ERROR = 'GET_MAHARASHTRA_ERROR';

export const getMaharashtraAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_MAHARASHTRA,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Maharashtra, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {

        dispatch({
          type: GET_MAHARASHTRA_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_MAHARASHTRA_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
