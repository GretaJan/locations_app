import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Home from '../../components/Admin/map';

const AdminStack = createStackNavigator();

const AdminNavigation = () => {

    return (
        <AdminStack.Navigator 
            initialRouteName="Map"
            screenOptions={{
                headerShown: false
         }} >
            <AdminStack.Screen name='Map' component={Home} />
        </AdminStack.Navigator>
    )
}

export default AdminNavigation