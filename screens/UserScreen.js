import React, {useState} from 'react'
import {View, Button, TextInput, StyleSheet} from 'react-native'
import {useDispatch} from 'react-redux';

import * as userActions from '../store/actions/user';

import Card from '../components/Card';
import BodyText from '../components/BodyText';

import Colors from '../constants/Color';

const UserScreen = props => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const dispatch = useDispatch();


    const usernameHandler = (enteredText) => {
        setUsername(enteredText)
    };
    const passwordHandler = (enteredText) => {
        setPassword(enteredText)
    };
    const registerHandler = () => {
        props.navigation.navigate({routeName: 'Register'});
    }

    const loginHandler = (username, password) => {
        if (username.length === 0 || password.length === 0) {
            setError(true)
        } else {
            dispatch(userActions.logIn(username, password));
        }
    }

    return (
        <Card>
            {error ? <BodyText>Please fill out both fields</BodyText> : <BodyText></BodyText>}
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
            <Button title="Log in" onPress={()=>{
                loginHandler(username, password)
            }}/>
            <BodyText style={styles.registerText}>Not registered?</BodyText>
            <Button title="Register user" onPress={registerHandler} />
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

export default UserScreen;