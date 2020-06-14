import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import LoginPage from '../../components/authorization';
import ForgotPassword from '../../components/authorization/ForgotPassword';

const AdminStack = createStackNavigator();

const AdminNavigation = () => {

    return (
        <AdminStack.Navigator 
            initialRouteName="Map"
            screenOptions={{
                headerShown: false
         }} >
            <AdminStack.Screen name='Login' component={LoginPage} />
            <AdminStack.Screen name='ForgotPassword' component={ForgotPassword} />
        </AdminStack.Navigator>
    )
}

export default AdminNavigation