const initialState = {
  count: 0,
  messages: [],
};

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'SEND_MESSAGE': {
      console.log('reducer send: ', action.payload);
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    }

    case 'GET_NEW_MESSAGE': {
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    }

    default:
      return state;
  }
}
