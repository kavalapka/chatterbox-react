const initialState = {
  count: 0,
  messages: [],
  isFetching: false,
};

export default function pageReducer(state = initialState, action) {
  console.log('reducer page: ', state, action.payload);
  switch (action.type) {
    case 'SEND_MESSAGE': {
      const msgs = [...state.messages].concat(action.payload);
      console.log('msgs: ', msgs, action.payload);
      return { ...state, messages: msgs };
    }
    case 'GET_MESSAGES_REQUEST':
      return { ...state, isFetching: true };

    case 'GET_MESSAGES_SUCCESS': {
      const msgs = [...state.messages].concat(action.payload);
      return {
        ...state,
        messages: msgs,
        isFetching: false,
      };
    }

    default:
      return state;
  }
}
