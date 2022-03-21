export const ADD_MESSAGE ='MESSAGES::ADD_MESSAGE';
export const ADD_MESSAGE_WITH_SAGA='MESSAGES::ADD_MESSAGE_WITH_SAGA'

export const addMessage = (id, message) => ({
 type: ADD_MESSAGE,
 payload: {
     id: id,
     message: message
 }
});

export const addMessageWithSaga = (id, message) => ({
    type:ADD_MESSAGE_WITH_SAGA,
    payload: {
        id: id,
        message: message
    }
}) 