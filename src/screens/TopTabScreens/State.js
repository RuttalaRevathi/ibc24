/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getStateAction from '../../redux/actions/getStateAction';
import CategoryUI from '../../components/CategoryUI';


const StateScreen = ({
    navigation,
    stateData,
    stateLoaing,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStateAction('state'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {stateData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="state"
        />
    );
};

type Props = {
    stateData: Function,
    stateLoaing: Boolean,
};
const mapStateToProps = state => ({
    stateData: state.stateReducer?.stateData,
    stateLoaing: state.stateReducer?.stateLoaing,
});
const mapDispatchToProps = {
    getStateAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(StateScreen);
