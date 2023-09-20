/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getCountryAction from '../../redux/actions/getCountryAction';
import CategoryUI from '../../components/CategoryUI';


const CountryScreen = ({
    navigation,
    countryData,
    countryLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountryAction('country'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {countryData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="country"
        />
    );
};

type Props = {
    countryData: Function,
    countryLoading: Boolean,
};
const mapStateToProps = state => ({
    countryData: state.countryReducer?.countryData,
    countryLoading: state.countryReducer?.countryLoading,
});
const mapDispatchToProps = {
    getCountryAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(CountryScreen);
