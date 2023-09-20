/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
// import getharyanaAction from '../../redux/actions/getDistrictsAction';
import CategoryUI from '../../components/CategoryUI';
import { getHaryanaAction } from '../../redux/actions/getHaryanaAction';


const HaryanaScreen = ({
    navigation,
    haryanaData,
    haryanaLoading,
    route,
}: Props) => {

    haryanaData = useSelector(state => state.haryanaReducer.haryanaData);
    // share function

    return (
        <CategoryUI
        data = {haryanaData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="haryana"
        />
    );
};

type Props = {
    haryanaData: Function,
    haryanaLoading: Boolean,
};


export default HaryanaScreen;
