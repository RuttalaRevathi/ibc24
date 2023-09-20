/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Chhattisgarh} from '../../utilities/urls';

export const GET_CHHATTISGARH_SUCCESS = 'GET_CHHATTISGARH_SUCCESS';
export const GET_CHHATTISGARH_ERROR = 'GET_CHHATTISGARH_ERROR';
export const GET_CHHATTISGARH = 'GET_CHHATTISGARH';

 const getChhattisgarhAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_CHHATTISGARH,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Chhattisgarh, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',

          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_CHHATTISGARH_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_CHHATTISGARH_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getChhattisgarhAction;
