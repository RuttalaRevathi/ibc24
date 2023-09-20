/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getChhattisgarhAction from '../../redux/actions/getChhattisgarhAction';
import CategoryUI from '../../components/CategoryUI';


const ChhattisgarhScreen = ({
    navigation,
    chhattisgarhData,
    chhattisgarhLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getChhattisgarhAction('chhattisgarh'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {chhattisgarhData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="chhattisgarh"
        />
    );
};

type Props = {
    chhattisgarhData: Function,
    chhattisgarhLoading: Boolean,
};
const mapStateToProps = state => ({
    chhattisgarhData: state.chhattisgarhReducer?.chhattisgarhData,
    chhattisgarhLoading: state.chhattisgarhReducer?.chhattisgarhLoading,
});
const mapDispatchToProps = {
    getChhattisgarhAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ChhattisgarhScreen);
