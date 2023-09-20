/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
// import getpunjabAction from '../../redux/actions/getDistrictsAction';
import CategoryUI from '../../components/CategoryUI';
import { getPunjabAction } from '../../redux/actions/getPunjabAction';


const PunjabScreen = ({
    navigation,
    punjabData,
    punjabLoading,
    route,
}: Props) => {

    punjabData = useSelector(state => state.punjabReducer.punjabData);
    // share function

    return (
        <CategoryUI
        data = {punjabData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="punjab"
        />
    );
};

type Props = {
    punjabData: Function,
    punjabLoading: Boolean,
};


export default PunjabScreen;
