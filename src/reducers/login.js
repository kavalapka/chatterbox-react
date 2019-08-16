export const initialState = {
  name: localStorage.getItem('CHATTERBOX_USERNAME') || 'Unknown User',
  login: false,
  showLoginForm: false,
  allowNotify: 'default',
};
export function loginReducer(state = initialState, action) {
  console.log('USER REDUCER');
  switch (action.type) {
    case 'SHOW_LOGIN_FORM': {
      console.log('reducer show form', action.payload);
      return {
        ...state,
        showLoginForm: true,
      };
    }
    case 'LOGIN_USER': {
      console.log('reducer LOGIN_USER', action.payload);
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
