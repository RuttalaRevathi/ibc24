/* eslint-disable prettier/prettier */

import {
    GET_BLOG,
    GET_BLOG_SUCCESS,
    GET_BLOG_ERROR,
  } from '../actions/getBlogAction';

  const initialState = {
    blogData: [],
    blogLoading: false,
    error: false,
  };

  function blogReducer(state = initialState, action) {
    switch (action.type) {
      case GET_BLOG:
        return {...state, blogLoading: true};
      case GET_BLOG_SUCCESS:
        return {...state, blogData: action.payload, blogLoading: false};
              case GET_BLOG_ERROR:
  return {...state, blogLoading: true, error: true};
      default:
        return state;
    }
  }

  export default blogReducer;
