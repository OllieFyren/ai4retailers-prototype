import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import FrontScreen from '../screens/FrontScreen';
import AvailableStoresScreen from '../screens/AvailableStoresScreen';
import SelectedStoreScreen from '../screens/SelectedStoreScreen';
import OrderScreen from '../screens/OrderScreen';
import UserScreen from '../screens/UserScreen';
import RegisterScreen from '../screens/RegisterScreen';

import Colors from '../constants/Color';

const defaultStackNavOptions = {
    headerStyle: {
      backgroundColor: 'white',
      borderTopWidth: 20,
      borderTopColor: Colors.primaryColor,
    },
    headerTitleStyle: {
      fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
      fontFamily: 'open-sans'
    },
    headerTintColor: Colors.primaryColor,
};

const Ai4Navigator = createStackNavigator({
    Front: FrontScreen,
    AvailableStores: AvailableStoresScreen,
    SelectedStore: SelectedStoreScreen,
    Order: OrderScreen,
    User: UserScreen,
    Register: RegisterScreen
},{
    defaultNavigationOptions: defaultStackNavOptions
});

export default createAppContainer(Ai4Navigator);