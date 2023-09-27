/* eslint-disable prettier/prettier */
import {  Assemblyelection, BaseUrl,  CategoryUrl } from '../../utilities/urls';

export const GET_ASSEMBLYELECTION_SUCCESS = 'GET_ASSEMBLYELECTION_SUCCESS';
export const GET_ASSEMBLYELECTION_ERROR = 'GET_ASSEMBLYELECTION_ERROR';
export const GET_ASSEMBLYELECTION = 'GET_ASSEMBLYELECTION';
export const getAssemblyelectionAction = () => {
  try {
    return async dispatch => {
      dispatch({
        type: GET_ASSEMBLYELECTION,
      });
      const result = await fetch(BaseUrl + CategoryUrl + Assemblyelection, {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

      });
      const json = await result.json();
      if (json) {
        dispatch({
          type: GET_ASSEMBLYELECTION_SUCCESS,
          payload: json,
        });
      } else {
        dispatch({
          type: GET_ASSEMBLYELECTION_ERROR,
        });
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
