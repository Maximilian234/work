import { ADD_MESSAGE } from "./action";

const initialState = {
  messageList2: {}
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const { chatId, message } = action.payload;
      const currentList = state.messageList2[chatId] || [];
      return {
        ...state,
        messageList2: {
          ...state.messageList2,
          [chatId]: [
            ...currentList,
            {
              ...message,
              id: `${chatId}${currentList.length}`,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default messagesReducer;
