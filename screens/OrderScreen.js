import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Title from '../components/Title';
import BodyText from '../components/BodyText';
import Card from '../components/Card';
import OrderItem from '../components/OrderItem';

import Colors from '../constants/Color';

import * as orderActions from '../store/actions/order';

const OrderScreen = props => {
    const order = useSelector(state => state.order.order);
    const loggedIn = useSelector(state => state.user.isLoggedIn);
    const userId = useSelector(state => state.user.userId);
    const dispatch = useDispatch();

    const [orderSend, setOrderSend] = useState({
        id: '',
        first: '',
        second: '',
        third: '',
        firstTop: '',
        secondTop: '',
    })
    
    let flavours = order.selectedFlavours.map(value => value[Object.keys(value)[0]]);
    let toppings = order.selectedToppings.map(value => value[Object.keys(value)[0]]);
    const confirmOrder = () => {
        setOrderSend(
            {
            id: userId,
            first: flavours[0],
            second: flavours[1],
            third: flavours[2],
            firstTop: toppings[0],
            secondTop: toppings[1],
            }
        );
        dispatch(orderActions.createOrder(orderSend))
    };

    const flavourArray = order.selectedFlavours.map((flavour, index) =>(
        <OrderItem key={index} style={styles.orderItem} title={flavour.value} />
    ));

    let toppingArray;
    if(order.selectedToppings.length === 0) {
        toppingArray = <BodyText>No toppings selected</BodyText>;
    } else {
        toppingArray = order.selectedToppings.map((topping, index) =>(
            <OrderItem key={index} style={styles.orderItem} title={topping.value}/>
        ))
    }

    const navigateLogin = () => {
        props.navigation.navigate({routeName: 'User'});
    }

    const confirmButton = (
        <TouchableOpacity style={styles.confirmButton} onPress={confirmOrder}>
            <BodyText style={styles.buttonText}>Confirm order</BodyText>
        </TouchableOpacity>
    );
    const loginButton = (
        <View>
            <BodyText style={styles.loginText}>Please Login to confirm your order</BodyText>
            <TouchableOpacity style={styles.confirmButton} onPress={navigateLogin}>
                <BodyText style={styles.buttonText}>Login</BodyText>
            </TouchableOpacity>
        </View>
    )

    /* setOrderSend({
        id: user,
        first: orderSend.,
        second: orderSend.,
        third: orderSend.,
        firstTop: orderSend.,
        secondTop: orderSend.,
    }) */

    return (
        <View>
            <Title style={styles.title}>Confirm order</Title>
            <Card>
                <BodyText>{order.scoops} scoops</BodyText>
                <BodyText style={styles.head}>
                    Flavours:
                </BodyText>
                {flavourArray}
                <BodyText style={styles.head}>
                    Toppings:
                </BodyText>
                <View>
                {toppingArray}
                </View>
                {loggedIn ? confirmButton : loginButton}
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        marginVertical: 10
    },
    head: {
        marginTop: 15,
        marginBottom: 1
    },
    confirmButton: {
        backgroundColor: Colors.primaryColor,
        width: '70%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 20,
        marginVertical: 20,
    },
    buttonText: {
        color: 'white',
    },
    loginText: {
        marginTop: 20,
        fontFamily: 'open-sans-bold'
    }
});

export default OrderScreen;