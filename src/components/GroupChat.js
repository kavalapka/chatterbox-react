import React, { useRef, useEffect } from 'react';
import { uniqueId } from 'lodash';
import Message from './Message';
import './GroupChat.css';


const notifyUser = (messageObj) => {
  const { from, message } = messageObj;
  if (!document.hasFocus()) {
    // eslint-disable-next-line no-unused-vars
    const userNotification = new Notification(from, {
      body: message,
      icon: 'http://habrastorage.org/storage2/cf9/50b/e87/cf950be87f8c34e63c07217a009f1d17.jpg',
    });
  }
};

export default function GroupChat(props) {
  const { messages, notify } = props;
  const scrollRef = useRef(null);

  if (notify === 'granted' && messages.length) {
    notifyUser(messages[messages.length - 1]);
  }

  useEffect(() => {
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });
  return (
    <div className="group_chat" ref={scrollRef}>
      { messages.map((msg) => <Message key={msg.id || uniqueId()} message={msg} />) }
    </div>
  );
}
