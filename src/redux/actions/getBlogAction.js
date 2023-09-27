/* eslint-disable prettier/prettier */

import { BaseUrl, Blog, CategoryUrl} from '../../utilities/urls';

export const GET_BLOG_SUCCESS = 'GET_BLOG_SUCCESS';
export const GET_BLOG_ERROR = 'GET_BLOG_ERROR';
export const GET_BLOG = 'GET_BLOG';

 const getBlogAction = () => {

    try {
      return async dispatch => {
        dispatch({
          type: GET_BLOG,
        });
        const result = await fetch(BaseUrl + CategoryUrl + Blog, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const json = await result.json();
        if (json) {
          dispatch({
            type: GET_BLOG_SUCCESS,
            payload: json,
          });
        }
  else {
          dispatch({
            type: GET_BLOG_ERROR,
          });
          console.log('Unable to fetch!');
        }
      };
    } catch (error) {
      console.log(error);
    }
  };
export default getBlogAction;
