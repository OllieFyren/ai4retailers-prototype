import React from 'react'
import {View, StyleSheet} from 'react-native'
import TouchableCard from './TouchableCard';
import Title from './Title';
import BodyText from './BodyText';

const Store = props => {
    return (
        <TouchableCard height={200} onClick={props.onClick}>
            <View>
                <Title>{props.title}</Title>
            </View>
            <View>
                <BodyText>{props.address}</BodyText>
                <BodyText>{props.zipCode}</BodyText>
            </View>
        </TouchableCard>
    );
}

const styles = StyleSheet.create({

});

export default Store;