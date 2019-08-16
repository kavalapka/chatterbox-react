export default function loginUser(name) {
  return {
    type: 'LOGIN_USER',
    payload: name,
  };
}

export function showLoginForm() {
  console.log('action: show form');
  return {
    type: 'SHOW_LOGIN_FORM',
    payload: true,
  };
}

export function allowNotify() {
  console.log('action: allowNotify');
  return {
    type: 'ALLOW_NOTIFY',
    payload: 'granted',
  };
}
