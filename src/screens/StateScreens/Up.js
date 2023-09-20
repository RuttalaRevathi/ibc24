/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getUpAction from '../../redux/actions/getUpAction';
import CategoryUI from '../../components/CategoryUI';


const UpScreen = ({
    navigation,
    upData,
    upLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUpAction('Uttarpradesh'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {upData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="Uttarpradesh"
        />
    );
};

type Props = {
    upData: Function,
    upLoading: Boolean,
};
const mapStateToProps = state => ({
    upData: state.upReducer?.upData,
    upLoading: state.upReducer?.upLoading,
});
const mapDispatchToProps = {
    getUpAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(UpScreen);
