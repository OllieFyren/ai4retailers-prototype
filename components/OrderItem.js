import React from 'react';
import {View, StyleSheet} from 'react-native';
import BodyText from './BodyText';

const OrderItem = props => {
    return (
        <View style={{...styles.view, ...props.style}}>
            <BodyText>
                {props.title}
            </BodyText>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignSelf: 'flex-start'
    }
})
export default OrderItem;