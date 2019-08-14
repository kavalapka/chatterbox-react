const SERVER_URL = 'ws://st-chat.shas.tel';

export default function sendMessage(msg) {
  return {
    type: 'SEND_MESSAGE',
    payload: { message: msg },
  };
}

export function getMessages(dispatch) {
  let MESSAGES;
  const ws = new WebSocket(SERVER_URL);
  ws.onopen = () => {
    console.log('ws open');
  };

  ws.onmessage = (e) => {
    MESSAGES = JSON.parse(e.data);
    console.log('messages: ', MESSAGES);
    dispatch({
      type: 'GET_NEW_MESSAGE',
      payload: MESSAGES,
    });
  };

  ws.onclose = () => {
    console.log('disconnected');
    // automatically try to reconnect on connection loss
    // this.setState({
    //   ws: new WebSocket(URL),
    // })
  };
}
