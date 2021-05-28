import React, { useEffect, useState } from 'react';
import {Text, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import StoreList from '../components/StoreList';
import * as StoreActions from '../store/actions/store';

const AvailableStoresScreen = props => {
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const zipCode = props.navigation.getParam('zipCode')

    useEffect(()=>{
        dispatch(StoreActions.findStore(zipCode));
        setIsLoaded(true);
    }, [dispatch, zipCode]);

    const availableStores = useSelector(state => state.store.availableStores)

    if(isLoaded){
        return (
            <StoreList storesData={availableStores} onClick={(id) => {
                props.navigation.navigate({
                    routeName: 'SelectedStore',
                    params: {
                        storeId: id
                    }
                })
            }}/>
        );
    }
    return <Text>Loading...</Text>;
    
}

const styles = StyleSheet.create({

});

export default AvailableStoresScreen;