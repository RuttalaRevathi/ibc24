/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import getSarkariyojanaAction from '../../redux/actions/getSarkariyojanaAction';
import CategoryUI from '../../components/CategoryUI';


const SarkariyojanaScreen = ({
    navigation,
    sarkariyojanaData,
    sarkariyojanaLoaing,
    route,
}: Props) => {
    sarkariyojanaData = useSelector(state => state.sarkariyojanaReducer.sarkariyojanaData);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //    dispatch(getSarkariyojanaAction('sarkari-yojana'))
    // }, []);
   

    return (
        <CategoryUI
        data = {sarkariyojanaData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="sarkari-yojana"
        />
    );
};

type Props = {
    sarkariyojanaData: Function,
    sarkariyojanaLoaing: Boolean,
};
// const mapStateToProps = state => ({
//     sarkariyojanaData: state.sarkariyojanaReducer?.sarkariyojanaData,
//     sarkariyojanaLoaing: state.sarkariyojanaReducer?.sarkariyojanaLoaing,
// });
// const mapDispatchToProps = {
//     getSarkariyojanaAction,
// };
export default SarkariyojanaScreen;
