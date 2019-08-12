export const loginUser = (userName) => ({
  type: 'LOGIN_USER',
  userName,
});

export const loginUserSuccess = (userName) => ({
  type: 'LOGIN_USER_SUCCESS',
  userName,
  login: true,
});

export const sendMessage = (userName, text) => ({
  type: 'SEND_MESSAGE',
  userName,
  text,
});
