import React from 'react';

export default function Message(props) {
  const { message } = props;
  const time = new Date(message.time).toLocaleTimeString();

  return (
    <div className="message">
      <div className="message__wrap">
        <div className="message__user_img" />
        <div className="message__time">{time}</div>
        <div className="message__body">
          <div className="message__body__name">{message.from}</div>
          <div className="message__body__text">{message.message}</div>
        </div>
      </div>
    </div>
  );
}
