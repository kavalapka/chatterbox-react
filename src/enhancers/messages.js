const SERVER_URL = 'ws://st-chat.shas.tel';
let ws;
let MESSAGES;

function wsConnect(next, action) {
  ws = new WebSocket(SERVER_URL);
  const nextAction = action;

  ws.onopen = () => {
    console.log('ws open');
  };

  ws.onmessage = (e) => {
    MESSAGES = JSON.parse(e.data);
    console.log('messages: ', MESSAGES);
    nextAction.payload = MESSAGES;
    next(nextAction);
  };

  ws.onclose = () => {
    console.warn('disconnected');
    wsConnect(next, action);
  };

  ws.onerror = (err) => {
    console.error('Socket encountered error: ', err.message, 'Closing socket');
    ws.close();
  };
}

const connectWebSocket = () => (next) => (action) => {
  console.log(`Тип события: ${action.type}`);

  switch (action.type) {
    case 'GET_NEW_MESSAGES':
      if (!ws) {
        console.log('ws not open');
        wsConnect(next, action);
      }
      break;

    case 'SEND_MESSAGE':
      ws.send(JSON.stringify(action.payload));


      break;
    default:
  }
};

export default connectWebSocket;
