import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Message(props) {
  const { message, idx } = props;
  const time = new Date(message.time).toLocaleTimeString();
  let imgUser = (<div className="message__user_img">{idx}</div>);
  if (message.temp) {
    imgUser = (
      <div className="message__user_img">{idx}<Spinner className="message__spinner" animation="border" variant="warning" /></div>
    );
  }

  return (
    <div className="message">
      <div className="message__wrap">
        {imgUser}
        <div className="message__time">{time}</div>
        <div className="message__body">
          <div className="message__body__name">{message.from}</div>
          <div className="message__body__text">{message.message}</div>
        </div>
      </div>
    </div>
  );
}
