/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getEntertainmentAction from '../../redux/actions/getEntertainmentAction';
import CategoryUI from '../../components/CategoryUI';


const EntertainmentScreen = ({
    navigation,
    entertainmentData,
    entertainmentLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEntertainmentAction('entertainment'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {entertainmentData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="entertainment"
        />
    );
};

type Props = {
    entertainmentData: Function,
    entertainmentLoading: Boolean,
};
const mapStateToProps = state => ({
    entertainmentData: state.entertainmentReducer?.entertainmentData,
    entertainmentLoading: state.entertainmentReducer?.entertainmentLoading,
});
const mapDispatchToProps = {
    getEntertainmentAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(EntertainmentScreen);
