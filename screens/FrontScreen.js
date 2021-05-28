import React, {useState} from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import BodyText from '../components/BodyText';
import Title from '../components/Title';
import Card from '../components/Card';

import Colors from '../constants/Color';
import Color from '../constants/Color';

/* const fetchTest = async () => {
    try {
        let response = await fetch(
          'http://192.168.0.14:8080/api/app/user/create', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                username: 'TestUser',
                password: 'TestPassword'
            })
          }
        );
        let json = await response.json();
        console.log(json);
      } catch (error) {
         console.error(error);
      }
}; */

const FrontScreen = props => {
    const [zipCode, setZipCode] = useState('')
    const dispatch = useDispatch();
    const zipInputHandler = (enteredZip) => {
        setZipCode(enteredZip);
    }
    return (
        <View style={styles.screen}>
            <View style={styles.searchContainer}>
                <View style={styles.titleContainer}>
                    <Title style={styles.title}>Find stores near you:</Title>
                </View>
                <View style={styles.inputWrapper}>
                    <View style={styles.inputContainer}>
                        <TextInput onChangeText={zipInputHandler} style={styles.input} placeholder='Enter zipcode' keyboardType='number-pad' maxLength={4} textAlign='center'/>
                    </View>
                    <View style={styles.buttonContainer}>
                        <Button title="Search" onPress={() => {
                            props.navigation.navigate({
                                routeName: 'AvailableStores',
                                params: {
                                    zipCode: zipCode
                                }
                            });
                        }}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

FrontScreen.navigationOptions =  {
    headerTitle: 'Welcome',
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
      },
      searchContainer: {
          backgroundColor: 'white',
          width: '100%',
          shadowColor: '#202020',
          shadowOffset: {
            width: 2,
            height: 5
          },
          shadowRadius: 5,
          shadowOpacity: 0.26,
          elevation: 3,
          paddingVertical: 50
      },
      titleContainer: {
          alignItems: 'center',
          marginVertical: 20
      },
      title: {
          color: Colors.primaryColor
      },
      inputWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputContainer: {
          width: 200,
          height: 40,
          borderColor: Colors.primaryColor,
          borderBottomWidth: 2,
          justifyContent: 'center'
      },
      input: {
          fontSize: 28,
          height: 40,
      }
});

export default FrontScreen;