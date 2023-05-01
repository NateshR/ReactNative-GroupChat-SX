import {
  CLEAR_CHATROOM_CONVERSATION,
  CLEAR_CHATROOM_DETAILS,
  GET_CHATROOM_SUCCESS,
  GET_CONVERSATIONS_SUCCESS,
  LONG_PRESSED,
  MESSAGE_SENT,
  ON_CONVERSATIONS_CREATE_SUCCESS,
  PAGINATED_CONVERSATIONS_SUCCESS,
  REACTION_SENT,
  SELECTED_MESSAGES,
  SET_POSITION,
  UPDATE_CHAT_REQUEST_STATE,
  UPDATE_CONVERSATIONS,
} from '../types/types';

const initialState = {
  conversations: [],
  chatroomDetails: {} as any,
  messageSent: '' as any,
  isLongPress: false,
  selectedMessages: [],
  stateArr: [1, 2, 3, 7, 8, 9, 20, 19], //states for person started, left, joined, added, removed messages, aceept DM, reject DM.
  position: {x: 0, y: 0} as any,
};

export function chatroomReducer(state = initialState, action: any) {
  switch (action.type) {
    case LONG_PRESSED: {
      const isLongPressed = action.body;
      return {
        ...state,
        isLongPress: isLongPressed,
      };
    }
    case SELECTED_MESSAGES: {
      const selectedMessages = action.body;
      return {
        ...state,
        selectedMessages: selectedMessages,
      };
    }
    case GET_CONVERSATIONS_SUCCESS: {
      const {conversations = []} = action.body;
      let arr = conversations.reverse();
      return {...state, conversations: arr};
    }
    case PAGINATED_CONVERSATIONS_SUCCESS: {
      const {conversations = []} = action.body;
      let arr = conversations.reverse();
      return {...state, conversations: [...state.conversations, ...arr]};
    }
    case UPDATE_CONVERSATIONS: {
      const {obj} = action.body;
      return {...state, conversations: [obj, ...state.conversations]};
    }

    case CLEAR_CHATROOM_CONVERSATION: {
      const {conversations = []} = action.body;
      return {...state, conversations: conversations};
    }
    case GET_CHATROOM_SUCCESS: {
      const chatroomDetails = action.body;
      return {...state, chatroomDetails: chatroomDetails};
    }
    case CLEAR_CHATROOM_DETAILS: {
      const {chatroomDetails} = action.body;
      return {...state, chatroomDetails: chatroomDetails};
    }
    case UPDATE_CHAT_REQUEST_STATE: {
      const {chatRequestState} = action.body;
      return {
        ...state,
        chatroomDetails: {
          ...state.chatroomDetails,
          chatroom: {
            ...state.chatroomDetails.chatroom,
            chat_request_state: chatRequestState,
          },
        },
      };
    }
    case MESSAGE_SENT: {
      const {id: messageObj} = action.body;
      return {...state, messageSent: messageObj};
    }
    case REACTION_SENT: {
      const {previousMsg, changedMsg} = action.body;
      let index = state?.conversations.findIndex(
        (element: any) => element?.id === changedMsg?.id,
      );

      let arr = [...(state?.conversations as any)];
      if (index !== undefined || index !== -1) {
        arr[index] = changedMsg;
      }
      return {...state, conversations: [...arr]};
    }
    case SET_POSITION: {
      const {pageX, pageY} = action.body;
      return {...state, position: {x: pageX, y: pageY}};
    }
    default:
      return state;
  }
}
