export default function loginUser(name) {
  return {
    type: 'LOGIN_USER',
    payload: name,
  };
}

export function showLoginForm() {
  return {
    type: 'SHOW_LOGIN_FORM',
    payload: true,
  };
}

export function allowNotify() {
  return {
    type: 'ALLOW_NOTIFY',
    payload: 'granted',
  };
}
