import React from 'react';
import Navigation from './components/navigation/Path';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import configureStore from './redux/store';
// const { store, persistor } = configureStore();
import store from './redux/store';


function App() {
  return (
    <Provider store={ store }>
      {/* <PersistGate loading={ null } persistor={ persistor }> */}
        <Navigation />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
