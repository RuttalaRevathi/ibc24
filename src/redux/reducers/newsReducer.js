/* eslint-disable prettier/prettier */
const initialState = {
    news: [], // Your news data here
    categoryFilter: '',
  };
  
  const newsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CATEGORY_FILTER':
        return {
          ...state,
          categoryFilter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default newsReducer;