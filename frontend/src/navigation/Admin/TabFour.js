import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import LoginPage from '../../components/authorization';
import LoggedOut from '../../components/authorization/LoggedOutNotification';
import Login from '../Authorization/Login';

const AdminStack = createStackNavigator();

const AdminNavigation = () => {

    return (
        <AdminStack.Navigator 
            screenOptions={{
                headerShown: false
         }} >
            <AdminStack.Screen 
                name='Logout' component={ null } component={ LoggedOut }
         />
        </AdminStack.Navigator>
    )
}

export default AdminNavigation