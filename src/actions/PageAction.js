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
