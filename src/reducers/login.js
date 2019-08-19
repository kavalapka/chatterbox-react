export const initialState = {
  name: localStorage.getItem('CHATTERBOX_USERNAME') || 'Unknown User',
  login: false,
  showLoginForm: false,
  allowNotify: 'default',
};
export function loginReducer(state = initialState, action) {
  switch (action.type) {
    case 'SHOW_LOGIN_FORM': {
      return {
        ...state,
        showLoginForm: true,
      };
    }
    case 'LOGIN_USER': {
      return {
        ...state,
        name: action.payload,
        login: true,
        showLoginForm: false,
      };
    }

    case 'ALLOW_NOTIFY': {
      return {
        ...state,
        allowNotify: action.payload,
      };
    }

    default:
      return state;
  }
}
