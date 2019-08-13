import React from 'react';
import { uniqueId } from 'lodash';

export default function Page(props) {
  const { messages, sendMessage, getMessages } = props;
  const sendMsg = (e) => {
    sendMessage(e.currentTarget.innerText);
  };
  const getMsg = () => {
    getMessages();
  };

  return (
    <div>
      <p>
        You have {messages.length} messages!
      </p>
      <button type="button" onClick={sendMsg}>Test Message</button>
      <button type="button" onClick={getMsg}>Get Messages</button>
      <ul>
        {
          messages.map((msg) => (<li key={uniqueId()}>{msg.message}</li>))
        }
      </ul>
    </div>
  );
}
