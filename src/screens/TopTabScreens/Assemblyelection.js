/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import getAssemblyelectionAction from '../../redux/actions/getAssemblyelectionAction';
import CategoryUI from '../../components/CategoryUI';


const AssemblyelectionScreen = ({
    navigation,
    assemblyelectionData,
    assemblyelectionLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    assemblyelectionData = useSelector(state => state.assemblyelectionReducer.assemblyelectionData);

console.log(assemblyelectionData,"...............................>");

    return (
        <CategoryUI
        data = {assemblyelectionData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="assembly-election-2022"
        />
    );
};

type Props = {
    assemblyelectionData: Function,
    assemblyelectionLoading: Boolean,
};

export default AssemblyelectionScreen;
