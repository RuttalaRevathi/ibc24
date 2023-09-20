/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getJabalpurAction } from '../../redux/actions/getJabalpurAction';


const JabalpurScreen = ({
    navigation,
    jabalpurData,
    jabalpurLoading,
    route,
}: Props) => {

    jabalpurData = useSelector(state => state?.jabalpurReducer?.jabalpurData);

    return (
        <CategoryUI
        data = {jabalpurData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="jabalpur"
        />
    );
};

type Props = {
    jabalpurData: Function,
    jabalpurLoading: Boolean,
};



export default JabalpurScreen;
