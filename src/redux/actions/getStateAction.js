/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, State} from '../../utilities/urls';

export const GET_STATE_SUCCESS = 'GET_STATE_SUCCESS';
export const GET_STATE_ERROR = 'GET_STATE_ERROR';
export const GET_STATE = 'GET_STATE';

 const getStateAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_STATE,
        });
        const result = await fetch(BaseUrl + CategoryUrl + State, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_STATE_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_STATE_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getStateAction;
