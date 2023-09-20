/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
// import getGwaliorAction from '../../redux/actions/getDistrictsAction';
import CategoryUI from '../../components/CategoryUI';
import { getGwaliorAction } from '../../redux/actions/getGwaliorAction';


const GwaliorScreen = ({
    navigation,
    gwaliorData,
    gwaliorLoading,
    route,
}: Props) => {

    gwaliorData = useSelector(state => state?.gwaliorReducer?.gwaliorData);

    return (
        <CategoryUI
        data = {gwaliorData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="gwalior"
        />
    );
};

type Props = {
    gwaliorData: Function,
    gwaliorLoading: Boolean,
};


export default GwaliorScreen;
