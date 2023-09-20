/* eslint-disable prettier/prettier */

import { BaseUrl, CategoryUrl, Punjab} from '../../utilities/urls';

export const GET_PUNJAB_SUCCESS = 'GET_PUNJAB_SUCCESS';
export const GET_PUNJAB_ERROR = 'GET_PUNJAB_ERROR';
export const GET_PUNJAB = 'GET_PUNJAB';

 const getPunjabAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_PUNJAB,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Punjab, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
         
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_PUNJAB_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_PUNJAB_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getPunjabAction;
