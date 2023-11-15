/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { useNavigation, useRoute } from '@react-navigation/native';

const BiharScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Use useSelector to get the biharData from your Redux store
  const biharData = useSelector((state) => state?.biharReducer?.biharData);

  // Use getFocusedRouteNameFromRoute to get the currently focused tab
  const categoryName = route.state
    ? route.state.routes[route.state.index].name
    : 'bihar'; // Default to 'bihar' if no tab is selected

  return (
    <CategoryUI
      data={biharData}
      navigation={navigation}
      title={categoryName}
      categoryName={categoryName}
    />
  );
};

export default BiharScreen;
