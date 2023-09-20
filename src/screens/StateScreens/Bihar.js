/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getBiharAction } from '../../redux/actions/getBiharAction';


const BiharScreen = ({
    navigation,
    biharData,
    biharLoading,
    route,
}: Props) => {

    biharData = useSelector(state => state?.biharReducer?.biharData);


    return (
        <CategoryUI
        data = {biharData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="bihar"
        />
    );
};

type Props = {
    biharData: Function,
    biharLoading: Boolean,
};


export default BiharScreen;
