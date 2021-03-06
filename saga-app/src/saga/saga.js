//GENERATORS

import { delay, put, takeLatest } from "redux-saga/effects";

function *withdrawWithGST(action){
    delay(5000);
    yield put({type:"WITHDRAW_GST",value:(action.value+(action.value*0.18))})
};

export function *withdraw(){
    yield takeLatest("WITHDRAW",withdrawWithGST);
};