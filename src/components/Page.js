import React from 'react';
import GroupChat from './GroupChat';
import WriteArea from './WriteArea';

export default function Page(props) {
  const { messages, sendMessage, getMessages } = props;
  const getMsg = () => {
    getMessages();
  };

  return (
    <div className="page_container">
      <p>
        You have {messages.length} messages!
      </p>
      <button type="button" onClick={getMsg}>Get Messages</button>
      <GroupChat messages={messages} />
      <WriteArea sendMessage={sendMessage} />
    </div>
  );
}
