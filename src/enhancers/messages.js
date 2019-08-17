import store from '../store';

// const SERVER_URL = 'ws://st-chat.shas.tel';
const SERVER_URL = 'wss://wssproxy.herokuapp.com';
let ws;
let MESSAGES;

function wsConnect(next) {
  let hasRecievedMessages = false;
  ws = new WebSocket(SERVER_URL);

  ws.onopen = () => {
    console.log('ws open');
    store.dispatch({ type: 'CONNECT_WS' });
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

    next({ type, payload });
  };

  ws.onclose = () => {
    console.warn('disconnected');
    store.dispatch({ type: 'DISCONNECT_WS' });
    wsConnect(next);
  };

  ws.onerror = (err) => {
    console.log('ERROR: ', err);
    ws.close();
  };
}

const connectWebSocket = ({ getState }) => (next) => (action) => {
  switch (action.type) {
    case 'PRELOAD_MESSAGES':
      if (!ws) {
        wsConnect(next);
      }
      break;

    case 'SEND_MESSAGE':
      console.log('ws sate: ', ws.readyState);
      console.log('NAVIGATOR: ', navigator.onLine);
      if (ws.readyState !== 1) {
        console.log('SAVE_OFFLINE_MSG payload: ', action.payload);
        const type = 'SAVE_OFFLINE_MSG';
        next({ type, payload: [action.payload] });
      } else {
        console.log(`Send message: ${action.payload}`);
        ws.send(JSON.stringify(action.payload));
      }
      break;

    case 'CONNECT_WS': {
      if (ws.readyState === 1) {
        const state = getState();
        const offlineMsg = state.page.offlineMessages;
        console.log(`Send offfline messages: ${offlineMsg}`);
        offlineMsg.forEach((msg) => ws.send(JSON.stringify(msg)));
        next(action);
      }
    }
      break;

    default: next(action);
  }
};

export default connectWebSocket;
