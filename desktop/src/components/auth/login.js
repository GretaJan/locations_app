import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/actions/authActions';

const Login = ({ login, logout }) => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
  
})

const onChangeName = (e) => {
    setName(e.target.value);
}

const onChangePassword = (e) => {
    setPassword(e.target.value);
}

const loginFunc = (e) => {
    e.preventDefault();  

    const data = {
        username: name,
        password: password
    }
    login(data);
}

const logoutFunc = (e) => {
    e.preventDefault();
    logout();
}

    return (
        <div class="flex-right" > 
            <p>Login</p>
            <form>
                <input onChange={onChangeName} value={name} />
                <input onChange={onChangePassword} value={password} />
                <button onClick={ loginFunc }>Login</button>
            </form>
            <button onClick={ logoutFunc }>Logout</button>
        </div>
    )
}

export default connect(null, { login, logout })(Login)