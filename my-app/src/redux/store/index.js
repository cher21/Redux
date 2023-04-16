import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from "@redux-saga/core"
import { combineReducers } from 'redux';
import rootSaga from '../saga';
import userReducers from '../reducer/userReducerSaga';
import productReducers from '../reducer/productReducerSaga';
import loginReducers from '../reducer/loginReducerSaga';

const saga = createSagaMiddleware()
const reducer = combineReducers({
    userReducers,
    productReducers,
    loginReducers
})

const store= configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: false,
    }).concat(saga)
})
saga.run(rootSaga)

export default store