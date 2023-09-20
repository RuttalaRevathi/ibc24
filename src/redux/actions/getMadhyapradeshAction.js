/* eslint-disable prettier/prettier */

import { BaseUrl,  CategoryUrl, Madhyapradesh} from '../../utilities/urls';

export const GET_MADHYAPRADESH_SUCCESS = 'GET_MADHYAPRADESH_SUCCESS';
export const GET_MADHYAPRADESH_ERROR = 'GET_MADHYAPRADESH_ERROR';
export const GET_MADHYAPRADESH = 'GET_MADHYAPRADESH';

 const getMadhyapradeshAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_MADHYAPRADESH,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Madhyapradesh, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_MADHYAPRADESH_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_MADHYAPRADESH_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getMadhyapradeshAction;
