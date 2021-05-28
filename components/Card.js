import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card = props => {
    return (
        <View style={styles.outerContainer}>
            <View style={{...styles.card, height: props.height}}>
                    {props.children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    outerContainer: {
        alignItems: 'center',
    },
    card: {
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

export default Card;