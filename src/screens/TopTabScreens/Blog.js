/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import getBlogAction from '../../redux/actions/getBlogAction';
import CategoryUI from '../../components/CategoryUI';


const BlogScreen = ({
    navigation,
    blogData,
    blogLoading,
    route,
}: Props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBlogAction('blog'));

    }, []);
    // share function

    return (
        <CategoryUI
        data = {blogData}
        navigation = {navigation}
        title = {route.name}
        categoryName ="blog"
        />
    );
};

type Props = {
    blogData: Function,
    blogLoading: Boolean,
};
const mapStateToProps = state => ({
    blogData: state.blogReducer?.blogData,
    blogLoading: state.blogReducer?.blogLoading,
});
const mapDispatchToProps = {
    getBlogAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogScreen);
