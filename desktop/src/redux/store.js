import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// import { persistStore, persistCombineReducers } from 'redux-persist';
// import createElectronStorage  from 'redux-persist-electron-storage';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const initialState = {};
const middleware = [thunk];

// const persistConfig = {
//     key: 'root',
//     storage: createElectronStorage(),
//     // blacklist: [products],
//     whitelist: ['authReducer'],
//     stateReconciler: autoMergeLevel2,
// }

// const persistedReducer = persistCombineReducers (persistConfig, rootReducer)

// export default() => {
//     const store = createStore(
//         persistedReducer,
//         initialState,
//         applyMiddleware(...middleware)
//     );
//     const persistor = persistStore(store);
//     return {
//         store: store,
//         persistor: persistor
//     }
// }
const store = createStore(
            rootReducer,
            initialState,
            applyMiddleware(...middleware)
        );

export default store