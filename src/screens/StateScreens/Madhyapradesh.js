/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getMadhyapradeshAction from '../../redux/actions/getMadhyapradeshAction';
import CategoryUI from '../../components/CategoryUI';


const MadhyapradeshScreen = ({
    navigation,
    madhyapradeshData,
    madhyapradeshLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMadhyapradeshAction('madhya-pradesh'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {madhyapradeshData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="madhya-pradesh"
        />
    );
};

type Props = {
    madhyapradeshData: Function,
    madhyapradeshLoading: Boolean,
};
const mapStateToProps = state => ({
    madhyapradeshData: state.madhyapradeshReducer?.madhyapradeshData,
    madhyapradeshLoading: state.madhyapradeshReducer?.madhyapradeshLoading,
});
const mapDispatchToProps = {
    getMadhyapradeshAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(MadhyapradeshScreen);
