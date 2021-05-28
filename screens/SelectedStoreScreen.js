import React, { useEffect } from 'react';
import {StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import * as StoreActions from '../store/actions/store';
import * as OrderActions from '../store/actions/order';
import SelectionList from '../components/SelectionList';

const SelectedStoreScreen = props => {
    const id = props.navigation.getParam('storeId')
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(StoreActions.findSelection(id));
    }, [dispatch, id])
    
    const filteredSelection = useSelector(state => state.store.filteredSelection);

    const orderNavigate = (orderDetails) => {
        dispatch(OrderActions.storeOrder(orderDetails));
        props.navigation.navigate({routeName: 'Order'});
    };


    return (
        <SelectionList flavours={filteredSelection} onNavigate={orderNavigate}/>
    );
}

const styles = StyleSheet.create({

});

export default SelectedStoreScreen;