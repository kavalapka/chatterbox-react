export default function sendMessage(msg) {
  const sendMsg = {
    from: 'MyNAME',
    message: msg,
  };
  return {
    type: 'SEND_MESSAGE',
    payload: sendMsg,
  };
}

export function getMessages() {
  console.log('action GET_NEW_MESSAGES');
  return {
    type: 'GET_NEW_MESSAGES',
  };
}
