import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { getToken } from '../../redux/actions/authActions';
import { 
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';


// Components
import SideMenu from './SideMenu';
import Login from '../auth/login';
import Homepage from '../mainComponens/Map';
import Workers from '../mainComponens/Workers';

const db = require('../../database/db');

function App({token}) {
  // const [token, setToken] = useState('');
  // const [token, setToken] = useState(db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token !== undefined ? db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token : '');
  // const [token, setToken] = useState(db.admin.find({}).db.executor.buffer.length > 0 ? db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token : '');

  useEffect(() => {

    // console.log(db.admin.find({}).db.executor.queue.tasks[db.admin.find({}).db.executor.queue.tasks - 1])
      // db.admin.find({}, function(err, docs) {
      //   console.log(err || 'docs', docs)
      //   setToken("db", docs.db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token);
      // })
      // if(db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token !== undefined) {
      //   setToken("db", db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token);
      //   console.log("hello")
      // }
// const lalala = db.admin.find({}, function(err, docs) {
//     // console.log(err || 'docs', docs)
//     // setToken("db", docs.db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token);
//     return db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token
//   })

  // console.log(db.admin.find({}).db.executor.buffer[db.admin.find({}).db.executor.buffer.length - 1].arguments[0].token)
      // console.log(db.admin.find({}).db.executor.buffer.length)
      // console.log("token", token)
      // if(db.admin.find({}).db.executor.buffer[0] !== undefined) {
      //   console.log("nor undefined", db.admin.find({}).db.executor.buffer[0].arguments)
      //   if(db.admin.find({}).db.executor.buffer[0].arguments[0].token !== undefined) {
      //     console.log('hello',db.admin.find({}).db.executor.buffer[0].arguments[0].token)
      //     setToken(true)
      //   } else {
      //     console.log("bummer",db.admin.find({}))
      //     setToken(false)
      //   }
      // } else {
      //   setToken(false)
      // }
      // getToken();
      // console.log("updated", token)
      console.log('token',token)
  }, [token])

  return (
    token === null ? (
      <Login />
    ) : (
      <Login />
      // <Router>
      //   <SideMenu />
      //   <Switch>
      //     <Route exact path="/" component={ Homepage } />
      //     <Route path="/workers" component={ Workers } />
      //   </Switch>
      // </Router>
    )
  )
}
const mapStateToProps = (state) => ({
  token: state.authorization.token
})

export default connect(mapStateToProps)(App)