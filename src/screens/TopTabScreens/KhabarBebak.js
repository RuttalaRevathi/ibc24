/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getKhabarBebakAction from '../../redux/actions/getKhabarBebakAction';
import CategoryUI from '../../components/CategoryUI';


const KhabarBebakScreen = ({
    navigation,
    khabarbebakData,
    khabarbebakLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getKhabarBebakAction('khabarbebak'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {khabarbebakData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="khabarbebak"
        />
    );
};

type Props = {
    khabarbebakData: Function,
    khabarbebakLoading: Boolean,
};
const mapStateToProps = state => ({
    khabarbebakData: state.khabarBebakReducer?.khabarbebakData,
    khabarbebakLoading: state.khabarBebakReducer?.khabarbebakLoading,
});
const mapDispatchToProps = {
    getKhabarBebakAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(KhabarBebakScreen);
