/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Khabarbebak} from '../../utilities/urls';

export const GET_KHABARBEBAK_SUCCESS = 'GET_KHABARBEBAK_SUCCESS';
export const GET_KHABARBEBAK_ERROR = 'GET_KHABARBEBAK_ERROR';
export const GET_KHABARBEBAK = 'GET_KHABARBEBAK';

 const getKhabarBebakAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_KHABARBEBAK,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Khabarbebak, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_KHABARBEBAK_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_KHABARBEBAK_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getKhabarBebakAction;
