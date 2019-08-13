export default function sendMessage(msg) {
  return {
    type: 'SEND_MESSAGE',
    payload: { message: msg },
  };
}

export function getMessages() {
  return (dispatch) => {
    dispatch({
      type: 'GET_MESSAGES_REQUEST',
      payload: 'wss request goes here',
    });

    setTimeout(() => {
      dispatch({
        type: 'GET_MESSAGES_SUCCESS',
        payload: [
          { message: 'first M' },
          { message: 'second M' },
        ],
      });
    }, 1000);
  };
}
