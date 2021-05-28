import React, {useState} from 'react'
import {View, Button, TextInput, StyleSheet, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Card from '../components/Card';
import BodyText from '../components/BodyText';

import * as userActions from '../store/actions/user';

import Colors from '../constants/Color';

const RegisterScreen = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [registered, setRegistered] = useState(false);
    const dispatch = useDispatch();
    const usernameHandler = (enteredText) => {
        setUsername(enteredText)
    };
    const passwordHandler = (enteredText) => {
        setPassword(enteredText)
    }

    const errorMessage = (
        <BodyText>Please fill out both fields.</BodyText>
    );
    const registeredMessage = (
        <BodyText>You are now registered and can go back and log in.</BodyText>
    )
    const registerHandler = (username, password) => {
        if (username.length === 0 || password.length === 0) {
            setError(true)
        } else {
            dispatch(userActions.register(username, password));
            setRegistered(true);
        }
    }
        return (
            <Card>
                {registered ? registeredMessage : <BodyText></BodyText>}
                {error ? errorMessage : <BodyText></BodyText>}
                <BodyText>Username:</BodyText>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            autoCorrect={false}
                            style={styles.input}
                            onChangeText={usernameHandler}
                            value={username}
                        />
                    </View>
                </View>
                <BodyText>Password:</BodyText>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            autoCorrect={false}
                            secureTextEntry={true}
                            style={styles.input}
                            onChangeText={passwordHandler}
                            value={password}
                        />
                    </View>
                </View>
                <Button title="Register" onPress={() => registerHandler(username, password)}/>
            </Card>
        );
}

const styles = StyleSheet.create({
    inputWrapper: {
        width: '100%',
        backgroundColor: 'white',
        marginVertical: 10
    },
    inputContainer: {
        width: '100%',
          height: 40,
          borderColor: Colors.primaryColor,
          borderBottomWidth: 2,
          justifyContent: 'center'
    },
    input: {
        fontSize: 20,
          height: 40,
    },
    registerText: {
        alignSelf: 'center',
        marginTop: 15
    }
});

export default RegisterScreen;