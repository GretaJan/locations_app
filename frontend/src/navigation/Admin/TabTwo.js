import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import WorkersList from '../../components/Admin/workers_list/WorkersList';
import WorkerDetails from '../../components/Admin/workers_list/WorkerDetails';
import RegisterWorker from '../../components/Admin/workers_list/RegisterWorker';

const AdminStack = createStackNavigator();

const AdminNavigation = () => {

    return (
        <AdminStack.Navigator 
            screenOptions={{
                headerShown: false
         }} >
            <AdminStack.Screen name='List' component={WorkersList} />
            <AdminStack.Screen name='Worker' component={WorkerDetails} />
            <AdminStack.Screen name='Register' component={RegisterWorker} />
        </AdminStack.Navigator>
    )
}

export default AdminNavigation