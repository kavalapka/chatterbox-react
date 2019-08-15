export default function sendMessage(msg) {
  const sendMsg = {
    from: 'MyNAME',
    message: msg,
    // str: msg,
  };
  return {
    type: 'SEND_MESSAGE',
    payload: sendMsg,
  };
}

export function preloadMessages() {
  console.log('action PRELOAD_MESSAGES');
  return {
    type: 'PRELOAD_MESSAGES',
  };
}
