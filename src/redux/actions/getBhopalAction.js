/* eslint-disable prettier/prettier */
import {  BaseUrl, Bhopal, CategoryUrl } from '../../utilities/urls';

export const GET_BHOPAL_SUCCESS = 'GET_BHOPAL_SUCCESS';
export const GET_BHOPAL_ERROR = 'GET_BHOPAL_ERROR';
export const GET_BHOPAL = 'GET_BHOPAL';
export const getBhopalAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_BHOPAL,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Bhopal, {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

      });
      const json = await result.json();
      // console.log(json,"bhopal data===================>");
      if (json) {
        dispatch({
          type: GET_BHOPAL_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_BHOPAL_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
