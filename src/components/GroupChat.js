import React, { useRef, useEffect } from 'react';
import Message from './Message';
import './GroupChat.css';

export default function GroupChat(props) {
  const { messages } = props;
  const scrollRef = useRef(null);

  useEffect(() => {
    // console.log('SCROLL: ', scrollRef.current.scrollTop = scrollRef.current.scrollHeight);
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });
  return (
    <div className="group_chat" ref={scrollRef}>
      { messages.map((msg, idx) => <Message key={msg.id} idx={idx} message={msg} />) }
    </div>
  );
}
