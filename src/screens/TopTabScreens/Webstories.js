/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getWebstoriesAction from '../../redux/actions/getWebstoriesAction';
import { FlatList, Text, View } from 'react-native';


const WebstoriesScreen = ({ webstoriesData, webstoriesLoading, route }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWebstoriesAction('webstories'));
  }, []);

  console.log(webstoriesData, '-------------------------------------------------->webstoriesData:');

  


  return (
    <View>
<Text>   WebstoriesAction  </Text>
    </View>
  );
};


type Props = {
  webstoriesData: { data: [] };
  webstoriesLoading: boolean;
};

const mapStateToProps = (state) => {
  console.log('Redux Store State:', state);
  return {
    webstoriesData: state.webstoriesReducer?.webstoriesData ?? { data: [] },
    webstoriesLoading: state.webstoriesReducer?.webstoriesLoading ?? false,
  };
};

const mapDispatchToProps = {
  getWebstoriesAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(WebstoriesScreen);
