/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getIndorAction } from '../../redux/actions/getIndorAction';


const IndorScreen = ({
    navigation,
    indorData,
    indorLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getIndorAction());
    }, []);


    return (
        <CategoryUI
        data = {indorData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="indore"
        />
    );
};

type Props = {
    indorData: Function,
    indorLoading: Boolean,
};
const mapStateToProps = state => ({
    indorData: state.indorReducer?.indorData,
    indorLoading: state.indorReducer?.indorLoading,
});
const mapDispatchToProps = {
    getIndorAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(IndorScreen);
