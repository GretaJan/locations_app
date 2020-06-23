import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, logout } from '../../redux/actions/authActions';
const db = require('../../database/db');


const Login = ({ login, logout }) => {
const [name, setName] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
    // console.log("db.admin.find({}).db.executor.buffer[0].arguments[0].token", db.admin.find({}))
    // console.log(db.admin.find({}))
    // db.admin.find({}, function(err, docs) {
    //     console.log('docs', docs.token || err)
    // })

    // console.log('find token', db.admin.find({token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5MGM5YzUzYi1kNTA2LTQyZWUtOGJiYi0zOTNlOWEwZjgyM2QiLCJqdGkiOiJlYzc3YTE4NmUwMjQzOWE3MGFmZGQxNGNlZjMxM2RiOTg2ZTczNTE5ZjNjMDY2MDJiYjg0MGZmZTIwOTI1NzQwMWM5MDE1NDQ1NDlhMzAzZiIsImlhdCI6MTU5MjgyNjA5OSwibmJmIjoxNTkyODI2MDk5LCJleHAiOjE2MjQzNjIwOTksInN1YiI6IjMxIiwic2NvcGVzIjpbXX0.sAJtRywiJVIc_BGepDfabtKs4IrPNXzslSMfw8Lxp8vLD6S5Skih1VXZUBrm0CAK_w-IVpkwPDtJt6sVBfqmTTO79noeJDBYoxOSk-xj2TIUgjhXhqrMO1wbFh_Uemu2Pij4LJnsgN3VbtxQMhR-C71POZIsZ78blBMbUNHnyPVYYcSjmnAmHEgcgX2QYu55FnmSiAjtSh-R_TfAJMqrdJciH138Y0W3ImRGowPpbA9sHy_itPgjW2KfSEAWx_Pk5ePXFr2u-4ungNKJ4hJWOqxgRpkSJlRleTnVi-cpDdrQTZqjwx60QO3MSa1obytprh_pH8-Ni-cZtCa9i8I8T3MMjvqRlwjidKgpzYobUVfskc1ykYE_kkQjDzVvyVTBnEgHbTGcvU95d90lpLTHTJZ41p6mFV2NYTaUxjA8JbF9re5DNFE_JmA8LvnRYAQELIpolh2xQkb3yc4RE0_ojbc_fzbDcCSHTwH2--_UEBIyzyUdNNYBD5tu0GwmY5T5S2YzjOh2DesIhLs3KerSkdEYzuc6jWbCZ8_qcmxsx4CTr5U0OSrFnY17Lrr7YxCt61-TYorprCDavFk9vmIiRReZDrBcLSKB4uEP1i8mc5GPhuwgOI7tJERts7w86MGwSZzhtgUlRe_LFenps9QViQuLC-gBU1xL5BpGH5bMcOQ'}))

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
    // db.admin.find({}, function(err, docs){
    //     console.log(err || docs)
    // })
}

const logoutFunc = (e) => {
    e.preventDefault();
    logout();
    // console.log("logout", db.admin.find({}).db.executor.buffer[0].arguments[0].token);
}

    return (
        <div>
            <p>Login</p>
            <form>
                <input onChange={onChangeName} value={name} />
                <input onChange={onChangePassword} value={password} />
                <button onClick={ loginFunc }>Login</button>
            </form>
            <button onClick={ logoutFunc }>Login</button>
        </div>
    )
}

export default connect(null, { login, logout })(Login)