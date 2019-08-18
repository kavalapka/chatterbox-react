const initialState = {
  count: 0,
  messages: [],
  offlineMessages: [],
  connected: false,
};

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_NEW_MESSAGES': {
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    }
    case 'PRELOAD_MESSAGES': {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case 'SAVE_OFFLINE_MSG': {
      return {
        ...state,
        offlineMessages: [...state.offlineMessages, ...action.payload.messages],
        messages: [...state.messages, ...action.payload.tempMsg],
      };
    }

    case 'CONNECT_WS': {
      console.log('Reducer connected');
      return {
        ...state,
        connected: true,
      };
    }

    case 'DISCONNECT_WS': {
      console.log('Reducer disconnected');
      return {
        ...state,
        connected: false,
        offlineMessages: [],
      };
    }

    default:
      return state;
  }
}
