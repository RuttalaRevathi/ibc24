/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getReligionAction from '../../redux/actions/getReligionAction';
import CategoryUI from '../../components/CategoryUI';


const ReligionScreen = ({
    navigation,
    religionData,
    religionLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReligionAction('religion'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {religionData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="religion"
        />
    );
};

type Props = {
    religionData: Function,
    religionLoading: Boolean,
};
const mapStateToProps = state => ({
    religionData: state.religionReducer?.religionData,
    religionLoading: state.religionReducer?.religionLoading,
});
const mapDispatchToProps = {
    getReligionAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(ReligionScreen);
