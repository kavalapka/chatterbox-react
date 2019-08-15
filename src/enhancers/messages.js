const SERVER_URL = 'ws://st-chat.shas.tel';
let ws;
let MESSAGES;

const connectWebSocket = () => (next) => (action) => {
  console.log(`Тип события: ${action.type}`);
  const nextAction = action;

  switch (action.type) {
    case 'GET_NEW_MESSAGES':
      if (!ws) {
        console.log('ws not open');
        ws = new WebSocket(SERVER_URL);
      }

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
        console.log('disconnected');
      };
      break;

    case 'SEND_MESSAGE':
      ws.send(JSON.stringify(action.payload));

      break;
    default:
  }
};

export default connectWebSocket;
