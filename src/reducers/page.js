const initialState = {
  count: 0,
  messages: [],
};

export default function pageReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_NEW_MESSAGES': {
      console.log('reducer page', action.payload);
      return {
        ...state,
        messages: [...state.messages, ...action.payload],
      };
    }

    default:
      return state;
  }
}
