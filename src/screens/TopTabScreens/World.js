/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getWorldAction from '../../redux/actions/getWorldAction';
import CategoryUI from '../../components/CategoryUI';


const WorldScreen = ({
    navigation,
    worldData,
    worldLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWorldAction('world'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {worldData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="world"
        />
    );
};

type Props = {
    worldData: Function,
    worldLoading: Boolean,
};
const mapStateToProps = state => ({
    worldData: state.worldReducer?.worldData,
    worldLoading: state.worldReducer?.worldLoading,
});
const mapDispatchToProps = {
    getWorldAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(WorldScreen);
