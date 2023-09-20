/* eslint-disable prettier/prettier */

import { BaseUrl, MenuUrl} from "../../utilities/urls";

export const GET_MENU_DATA = 'GET_MENU_DATA';
export const GET_MENU_DATA_SUCCESS = 'GET_MENU_DATA_SUCCESS';
export const GET_MENU_DATA_ERROR = 'GET_MENU_DATA_ERROR';

const getMenuAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_MENU_DATA,
      });
      const result = await fetch(BaseUrl + MenuUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();

      if (json) {
        dispatch({
          type: GET_MENU_DATA_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_MENU_DATA_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
export default getMenuAction;
