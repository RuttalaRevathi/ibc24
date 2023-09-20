/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Himachalpradesh} from '../../utilities/urls';

export const GET_HP_SUCCESS = 'GET_HP_SUCCESS';
export const GET_HP_ERROR = 'GET_HP_ERROR';
export const GET_HP = 'GET_HP';

 const getHpAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_HP,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Himachalpradesh, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_HP_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_HP_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getHpAction;
