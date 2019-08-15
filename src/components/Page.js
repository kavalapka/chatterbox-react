import React from 'react';
import GroupChat from './GroupChat';
import WriteArea from './WriteArea';

export default function Page(props) {
  const { messages, sendMessage } = props;

  return (
    <div className="page_container">
      <p>
        You have {messages.length} messages!
      </p>
      <GroupChat messages={messages} />
      <WriteArea sendMessage={sendMessage} />
    </div>
  );
}
