import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import Home from '../../components/Workers';

const WorkerStack = createStackNavigator();

const WorkersNavigation = () => {

    return (
        <WorkerStack.Navigator 
            screenOptions={{
                headerShown: false
         }} >
            <WorkerStack.Screen name='Map' component={Home} />
        </WorkerStack.Navigator>
    )
}

export default WorkersNavigation