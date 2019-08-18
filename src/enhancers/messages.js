const SERVER_URL = 'wss://wssproxy.herokuapp.com';
let ws;
let MESSAGES;


document.body.onoffline = () => {
  // Force close connection if app offline
  if (ws.readyState === 1) {
    ws.close();
  }
};

function wsConnect(next, store) {
  if (!navigator.onLine) {
    // wait until get Internet Connection
    setTimeout(() => wsConnect(next, store), 1000);
    return;
  }
  let hasReceivedMessages = false;
  ws = new WebSocket(SERVER_URL);

  ws.onopen = () => {
    store.dispatch({ type: 'CONNECT_WS' });
  };

  ws.onmessage = (e) => {
    MESSAGES = JSON.parse(e.data);
    const payload = MESSAGES.reverse();
    let type;
    if (hasReceivedMessages) {
      type = 'GET_NEW_MESSAGES';
    } else {
      type = 'PRELOAD_MESSAGES';
    }
    hasReceivedMessages = true;

    next({ type, payload });
  };

  ws.onclose = () => {
    store.dispatch({ type: 'DISCONNECT_WS' });
    wsConnect(next, store);
  };

  ws.onerror = () => {
    ws.close();
  };
}

const connectWebSocket = (store) => (next) => (action) => {
  switch (action.type) {
    case 'PRELOAD_MESSAGES':
      if (!ws) {
        wsConnect(next, store);
      }
      break;

    case 'SEND_MESSAGE':
      if (ws.readyState !== 1) {
        // if ws not open
        const type = 'SAVE_OFFLINE_MSG';
        const tempMsg = { ...action.payload };
        tempMsg.temp = true;
        next({
          type,
          payload: { messages: [action.payload], tempMsg: [tempMsg] },
        });
      } else {
        // ws open
        ws.send(JSON.stringify(action.payload));
      }
      break;

    case 'CONNECT_WS':
      if (ws.readyState === 1 && navigator.onLine) {
        // ws open && app online
        const state = store.getState();
        const offlineMsg = state.page.offlineMessages;
        offlineMsg.forEach((msg) => ws.send(JSON.stringify(msg)));
        next(action);
      }
      break;

    default: next(action);
  }
};

export default connectWebSocket;
