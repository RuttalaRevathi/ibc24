/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getMaharashtraAction } from '../../redux/actions/getMaharashtraAction';


const MaharashtraScreen = ({
    navigation,
    maharashtraData,
    maharashtraLoading,
    route,
}: Props) => {
    maharashtraData = useSelector(state => state?.maharashtraReducer?.maharashtraData);
   
    return (
        <CategoryUI
        data = {maharashtraData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="maharashtra"
        />
    );
};

type Props = {
    maharashtraData: Function,
    maharashtraLoading: Boolean,
};


export default MaharashtraScreen;
