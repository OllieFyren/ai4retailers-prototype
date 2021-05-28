import React from 'react'
import {Text, StyleSheet} from 'react-native'

const Title = props => {
    return (
        <Text style={{...styles.title, ...props.style}}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontFamily: 'open-sans-bold',
        color: '#383838'
    }
});

export default Title;