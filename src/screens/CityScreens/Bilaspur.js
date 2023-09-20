/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getBilaspurAction } from '../../redux/actions/getBilaspurAction';


const BilaspurScreen = ({
    navigation,
    bilaspurData,
    bilaspurLoading,
    route,
}: Props) => {
    bilaspurData = useSelector(state => state?.bilaspurReducer?.bilaspurData);

    return (
        <CategoryUI
        data = {bilaspurData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="bilaspur"
        />
    );
};

type Props = {
    bilaspurData: Function,
    bilaspurLoading: Boolean,
};


export default BilaspurScreen;
