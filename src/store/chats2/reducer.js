import { ADD_CHAT } from "./action";

const initialState = {
  chatList: [],
};

const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      const newChat = {
        id: `id${state.chatList.length}`,
        name: action.payload,
        
      };
      console.log(newChat.id)
      return {
        ...state,
        chatList: [...state.chatList, newChat],
      };
    default:
      return state;
  }
};

export default chatsReducer 