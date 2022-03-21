import { ADD_CHAT, DELETE_CHAT, } from "./action";

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
     
     case DELETE_CHAT: 
        return {
          ...state, 
            chatList: [
              ...state.chatList.slice(0,action.payload),
              ...state.chatList.slice(action.payload +1)
            ],
        }
       

    default:
      return state;
  }
};

export default chatsReducer 