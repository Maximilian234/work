import { addMessage, ADD_MESSAGE_WITH_SAGA } from "./messages2/action"
import {put, delay, takeEvery} from 'redux-saga/effects'
import { AUTHOR } from "../message/common";

function* onAddMessageWithSaga(action) {

    yield put(addMessage(action.payload.id, action.payload.message));
    console.log('action--=---', action)

    if(action.payload.message.author !== AUTHOR.bot) {
        const botMessage = {
            author: AUTHOR.bot,
            text: "Привет я БОТ",
          }
    yield delay(2000);
    yield put(addMessage(action.payload.id, botMessage));
    }
}


function* mySaga() {
    yield takeEvery(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga);

   
}

export default mySaga;