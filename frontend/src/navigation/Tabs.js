import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../redux/actions/authActions';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Components
import LoginPage from '../components/authorization';
import Login from './Authorization/Login';

//Admin page
import AdminTabOne from './Admin/TabOne';
import AdminTabTwo from './Admin/TabTwo';
import AdminTabFour from './Admin/TabFour';
//Workers page
import WorkerTabOne from './Workers/TabOne';
import WorkerTabFour from './Workers/TabFour';

const AdminTabs = createBottomTabNavigator();
const WorkerTabs = createBottomTabNavigator();


const Navigation = ({ workerToken, adminToken, logOut }) => {
    const [isWorker, setIsWorker] = useState(false); 
    const [isAdmin, setIsAdmin] = useState(false); 
    // useEffect(() => {
    //     const checkStatus = async () => {
    //         try {
    //             setLoggedIn(worker)
    //         } catch {
    //             setLoggedIn('')
    //         }
    //     }
    // }, [])
    useEffect(() => {
        console.log("admin", adminToken);
        console.log("worker", workerToken);
        if(workerToken !== null && workerToken !== undefined) {
            if(Object.keys(workerToken).length > 0 ){
                setIsWorker(true)
            } else {
                setIsWorker(false)
            }
        } else  {
            setIsWorker(false),
            console.log("worker", isWorker)
        }
        if(adminToken !== null && adminToken !== undefined) {
            if(Object.keys(adminToken).length > 0 ){
                setIsAdmin(true)
            } else  {
                setIsAdmin(false)
            }
        } else  {
            setIsAdmin(false)
        }
    }, [workerToken, adminToken])
    
    const logOutTab = () => {
        let data = isWorker ? workerToken : adminToken
        console.log('data', data)
        logOut(data);
    }

    return (
        !isWorker && !isAdmin ? (
            // <LoginPage />
            <NavigationContainer>
                <Login />
            </NavigationContainer>
        ) : (
            <NavigationContainer>
            { isAdmin ? (
                <AdminTabs.Navigator initialRouteName="AdminMain">
                    <AdminTabs.Screen name="AdminMain" component={AdminTabOne} />
                    <AdminTabs.Screen name="List" component={AdminTabTwo} />
                    <AdminTabs.Screen name="Logout" component={AdminTabFour}
                        listeners={
                            { tabPress: () => (
                                logOutTab()
                            )}
                        }
                    />
                </AdminTabs.Navigator>
            ) : (
                <WorkerTabs.Navigator >
                    <WorkerTabs.Screen name="WorkerMain" component={WorkerTabOne} />
                    <WorkerTabs.Screen name="Logout" component={WorkerTabFour}
                        listeners={
                            { tabPress: () => (
                                logOutTab()
                            )}
                        }
                    />
                </WorkerTabs.Navigator>
            )}
            </NavigationContainer>
        )
    )
}

const mapStateToProps = state => ({
    workerToken: state.authorization.workerToken,
    adminToken: state.authorization.adminToken,
})

export default connect(mapStateToProps, { logOut })(Navigation)