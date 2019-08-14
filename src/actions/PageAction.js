const SERVER_URL = 'ws://st-chat.shas.tel';
const ws = new WebSocket(SERVER_URL);

export default function sendMessage(msg) {
  const sendMsg = {
    from: 'MyNAME',
    message: msg,
  };

  ws.send(JSON.stringify(sendMsg));
  return {
    type: 'SEND_MESSAGE',
    // payload: [{
    //   from: 'MyNAME',
    //   message: msg,
    // },
    // ],
  };
}

export function getMessages(dispatch) {
  let MESSAGES;

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
