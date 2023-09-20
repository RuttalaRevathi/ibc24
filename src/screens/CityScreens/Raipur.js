/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getRaipurAction } from '../../redux/actions/getRaipurAction';


const RaipurScreen = ({
    navigation,
    raipurData,
    raipurLoading,
    route,
}: Props) => {
    raipurData = useSelector(state => state?.raipurReducer?.raipurData);
   
    return (
        <CategoryUI
        data = {raipurData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="raipur"
        />
    );
};

type Props = {
    raipurData: Function,
    raipurLoading: Boolean,
};


export default RaipurScreen;
