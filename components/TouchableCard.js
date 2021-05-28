import React from 'react'
import {View, TouchableOpacity, StyleSheet} from 'react-native'

const TouchableCard = props => {
    return (
        <View style={styles.outerContainer}>
            <TouchableOpacity
            style={{...styles.touchable, height: props.height}}
            onPress={props.onClick}>
                    {props.children}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: 'center',
    },
    touchable: {
        width: '80%',
        shadowColor: '#202020',
        shadowOffset: {
            width: 2,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: 0.26,
        elevation: 3,
        backgroundColor: 'white',
        padding: 15,
        marginVertical: 20
    },
});

export default TouchableCard;