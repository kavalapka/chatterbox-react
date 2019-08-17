export default function sendMessage(messageObj) {
  return {
    type: 'SEND_MESSAGE',
    payload: messageObj,
  };
}

export function preloadMessages() {
  return {
    type: 'PRELOAD_MESSAGES',
  };
}

export function connctWS() {
  return {
    type: 'CONNECT_WS',
  };
}

export function disConnctWS() {
  return {
    type: 'DISCONNECT_WS',
  };
}
