import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/authActions';
import { index } from '../../styles/AdminStyles';

//components

const Login = ({ login, navigation: { navigate }}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    tryLogin = () => {
        const data = {
            username: username,
            password: password
        }
        login(data);
    }

    const forgotPasswordPage = () => {
        navigate('ForgotPassword');
    }

    return (
        <View style={ index().container }>
            <Text>Login</Text>
            <TextInput type="text" 
                    placeholder="name" 
                    onChangeText={value => setUsername(value) } value={username} 
            />
            <TextInput type="text" 
                    placeholder="password" 
                    onChangeText={value => setPassword(value) } value={password} 
            />
            <TouchableOpacity onPress={ tryLogin } >
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={ forgotPasswordPage } >
                <Text>Forgot Password</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect(null, { login })(Login)