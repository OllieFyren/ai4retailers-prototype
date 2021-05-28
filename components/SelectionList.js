import React, {useState} from 'react';
import {View, ScrollView, Button, StyleSheet, Platform} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import SelectMultiple from 'react-native-select-multiple';

import Title from './Title';

const SelectionList = props => {
    const [scoops, setScoops] = useState('2');
    const [selectedFlavours, setSelectedFlavours] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [order, setOrder] = useState({
        scoops: '',
        selectedFlavours: [],
        selectedToppings: [],
    });

    const setScoopsHandler = (selectedScoops) => {
        setScoops(selectedScoops);
        setOrder({
            scoops: selectedScoops,
            selectedFlavours: selectedFlavours,
            selectedToppings: order.selectedToppings
        });
    }

    const selectFlavourHandler = (selectedFlavours) => {
        setSelectedFlavours(selectedFlavours);
        setOrder({
            scoops: scoops,
            selectedFlavours: selectedFlavours,
            selectedToppings: order.selectedToppings
        });
    }
    const selectToppingsHandler = (selectedToppings) => {
        setSelectedToppings(selectedToppings);
        setOrder({
            scoops: scoops,
            selectedFlavours: order.selectedFlavours,
            selectedToppings: selectedToppings
        });
    }
    const navigateHandler = () => {
        props.onNavigate(order);
    }


    const toppings = [
        "Sprinkles",
        "Whipped cream"
    ]

    return (
        <View>
            <ScrollView>
                <View style={styles.titleContainerFirst}>
                    <Title>How many scoops?</Title>
                </View>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={scoops}
                        onValueChange={(itemValue, itemIndex) =>
                            setScoopsHandler(itemValue)
                        }
                    >
                        <Picker.Item label='1' value='1' />
                        <Picker.Item label='2' value='2' />
                        <Picker.Item label='3' value='3' />
                    </Picker>
                </View>
                <View>
                    <View style={styles.titleContainer}>
                        <Title>Select flavours</Title>
                    </View>
                    <View style={styles.selectContainer}>
                        <SelectMultiple
                        style={styles.selectList}
                        items={props.flavours}
                        maxSelect={scoops}
                        selectedItems={selectedFlavours}
                        onSelectionsChange={selectFlavourHandler}
                        />
                    </View>
                </View>
                <View>
                    <View style={styles.titleContainer}>
                        <Title>Select Toppings</Title>
                    </View>
                    <View style={styles.selectContainer}>
                    <SelectMultiple
                        style={styles.selectList}
                        items={toppings}
                        selectedItems={selectedToppings}
                        onSelectionsChange={selectToppingsHandler}
                        />
                    </View>
                </View>
                <View>
                    <Button title="Continue" onPress={navigateHandler} />
                </View>
            </ScrollView>
        </View>
        //https://github.com/react-native-picker/picker
    );
}

const styles = StyleSheet.create({
    titleContainerFirst: {
        marginTop: 30,
        alignItems: 'center',
    },
    titleContainer: {
        marginVertical: 30,
        alignItems: 'center',
    },
    pickerContainer: {
        width: Platform.OS === 'ios' ? '80%' : '50%',
        alignSelf: 'center'
    },
    selectContainer: {
        flex: 1,
        width: '80%',
        alignSelf: 'center'
    },
    selectList: {
        textAlign: 'center',
    }

});

export default SelectionList;