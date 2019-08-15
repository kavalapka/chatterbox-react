import React from 'react';
import Message from './Message';
import './GroupChat.css';

export default function GroupChat(props) {
  const { messages } = props;
  return (
    <div className="group_chat">
      { messages.map((msg, idx) => <Message key={msg.id} idx={idx} message={msg} />) }
    </div>
  );
}
