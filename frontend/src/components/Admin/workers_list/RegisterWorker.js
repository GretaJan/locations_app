import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { registerWorker } from '../../../redux/actions/adminActions';
import { index } from '../../../styles/AdminStyles';

//components

const Register = ({ registerWorker }) => {
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    tryLogin = () => {
        const data = {
            username: username,
            name: name,
            surname: surname,
            phone: phone,
            address: address, 
            email: email,
            password: password
        }
        registerWorker(data);
    }

    return (
        <View style={ index().container }>
            <Text>Login</Text>
            <TextInput type="text" 
                    placeholder="username" 
                    onChangeText={value => setUsername(value) } value={username} 
            />
            <TextInput type="text" 
                    placeholder="name" 
                    onChangeText={value => setName(value) } value={name} 
            />
            <TextInput type="text" 
                    placeholder="surname" 
                    onChangeText={value => setSurname(value) } value={surname} 
            />
            <TextInput type="text" 
                    placeholder="phone" 
                    onChangeText={value => setPhone(value) } value={phone} 
            />
            <TextInput type="text" 
                    placeholder="address" 
                    onChangeText={value => setAddress(value) } value={address} 
            />
            <TextInput type="text" 
                    placeholder="email" 
                    onChangeText={value => setEmail(value) } value={email} 
            />
            <TextInput type="text" 
                    placeholder="password" 
                    onChangeText={value => setPassword(value) } value={password} 
            />
            <TouchableOpacity onPress={ tryLogin } >
                <Text>Register</Text>
            </TouchableOpacity>
        </View>
    )
}

export default connect(null, { registerWorker })(Register)