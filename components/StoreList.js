import React from 'react'
import {View, FlatList, StyleSheet} from 'react-native'

import Store from './Store';

const StoreList = props => {
    const renderStore = itemData => {
        navigate = () => {
            props.onClick(itemData.item.storeId)
        }
        return (
            <Store 
                title={itemData.item.storeName} 
                address={itemData.item.storeAddress} 
                zipCode={itemData.item.storeZip}
                onClick={navigate}
            />
        );
    }
    return (
        <View>
            <FlatList 
                data={props.storesData}
                keyExtractor={(item, index) => item.storeId.toString()}
                renderItem={renderStore}
            />
        </View>
    );
}

const styles = StyleSheet.create({

});

export default StoreList;