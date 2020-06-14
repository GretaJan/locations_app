import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import LoginPage from '../../components/authorization';
import LoggedOut from '../../components/authorization/LoggedOutNotification';
import Login from '../Authorization/Login';

const WorkerStack = createStackNavigator();

const WorkerNavigation = () => {

    return (
        <WorkerStack.Navigator 
            screenOptions={{
                headerShown: false
         }} >
            <WorkerStack.Screen 
                name='Logout' component={ null } component={ LoggedOut }
         />
        </WorkerStack.Navigator>
    )
}

export default WorkerNavigation