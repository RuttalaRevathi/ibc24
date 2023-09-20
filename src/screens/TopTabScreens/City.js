/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getCityAction from '../../redux/actions/getCityAction';
import CategoryUI from '../../components/CategoryUI';


const CityScreen = ({
    navigation,
    cityData,
    cityLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCityAction('city'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {cityData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="city"
        />
    );
};

type Props = {
    cityData: Function,
    cityLoading: Boolean,
};
const mapStateToProps = state => ({
    cityData: state.cityReducer?.cityData,
    cityLoading: state.cityReducer?.cityLoading,
});
const mapDispatchToProps = {
    getCityAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CityScreen);
