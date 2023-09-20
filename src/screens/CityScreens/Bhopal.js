/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import CategoryUI from '../../components/CategoryUI';
import { getBhopalAction } from '../../redux/actions/getBhopalAction';


const BhopalScreen = ({
    navigation,
    bhopalData,
    bhopalLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBhopalAction());
    }, []);


    return (
        <CategoryUI
        data = {bhopalData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="bhopal"
        />
    );
};

type Props = {
    bhopalData: Function,
    bhopalLoading: Boolean,
};
const mapStateToProps = state => ({
    bhopalData: state.bhopalReducer?.bhopalData,
    bhopalLoading: state.bhopalReducer?.bhopalLoading,
});
const mapDispatchToProps = {
    getBhopalAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(BhopalScreen);
