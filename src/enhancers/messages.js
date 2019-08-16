// const SERVER_URL = 'ws://st-chat.shas.tel';
const SERVER_URL = 'wss://wssproxy.herokuapp.com';
let ws;
let MESSAGES;

function wsConnect(next) {
  let hasRecievedMessages = false;
  ws = new WebSocket(SERVER_URL);

  ws.onopen = () => {
    console.log('ws open');
  };

  ws.onmessage = (e) => {
    MESSAGES = JSON.parse(e.data);
    const payload = MESSAGES.reverse();
    let type;
    if (hasRecievedMessages) {
      type = 'GET_NEW_MESSAGES';
    } else {
      type = 'PRELOAD_MESSAGES';
    }
    hasRecievedMessages = true;
    // console.log('action type: ', type);

    next({ type, payload });
  };

  ws.onclose = () => {
    // console.warn('disconnected');
    wsConnect(next);
  };

  ws.onerror = () => {
    ws.close();
  };
}

const connectWebSocket = () => (next) => (action) => {
  switch (action.type) {
    case 'PRELOAD_MESSAGES':
      if (!ws) {
        wsConnect(next);
      }
      break;

    case 'SEND_MESSAGE':
      ws.send(JSON.stringify(action.payload));
      break;

    default: next(action);
  }
};

export default connectWebSocket;
