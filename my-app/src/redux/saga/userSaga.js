import { call, put } from 'redux-saga/effects';
import ApiMethod from "../../api/apiMethod";
import { doAddResponse, doDeleteResponse, doGetUserResponse, doUpdateResponse } from '../action/actionReducerSaga';

function* handleGetAllUser() {
    try {
        const result = yield call(ApiMethod.getAll);
        yield put(doGetUserResponse(result.data))
    }
    catch (error) {
        yield put(doGetUserResponse({ message: error }))
    }
}

function* handleAddUser(action) {
    try {
        const result = yield call(ApiMethod.create, action.payload)
        yield put(doAddResponse(result.data))
    }
    catch (error) {
        yield put(doAddResponse({ message: error }))
    }
}

function* handleUpdateUser(action) {
    try {
        console.log(action)
        const result = yield call(ApiMethod.update, action.payload[0], action.payload[1])
        yield put(doUpdateResponse(result.data))
    }
    catch (error) {
        yield put(doUpdateResponse({ message: error }))
    }
}

function* handleDelUser(action) {
    try {
        const result = yield call(ApiMethod.remove, action.payload)
        yield put(doDeleteResponse(result.data))
    }
    catch (error) {
        yield put(doDeleteResponse({ error }))
    }
}

export { handleAddUser, handleGetAllUser, handleUpdateUser, handleDelUser }