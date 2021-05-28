import React from 'react'
import {Text, StyleSheet} from 'react-native'

const BodyText = props => {
    return (
        <Text style={{...styles.bodyText, ...props.style}}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    bodyText: {
        fontSize: 18,
        fontFamily: 'open-sans',
        color: '#404040'
    }
});

export default BodyText;