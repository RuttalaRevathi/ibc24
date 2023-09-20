/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getHpAction from '../../redux/actions/getHpAction';
import CategoryUI from '../../components/CategoryUI';


const HpScreen = ({
    navigation,
    hpData,
    hpLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHpAction('himachal-pradesh'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {hpData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="himachal-pradesh"
        />
    );
};

type Props = {
    hpData: Function,
    hpLoading: Boolean,
};
const mapStateToProps = state => ({
    hpData: state.hpReducer?.hpData,
    hpLoading: state.hpReducer?.hpLoading,
});
const mapDispatchToProps = {
    getHpAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(HpScreen);
