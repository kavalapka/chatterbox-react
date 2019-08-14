import React, { useRef } from 'react';

export default function WriteArea(props) {
  const { sendMessage } = props;
  const myMsg = useRef(null);
  const send = () => {
    console.log('send Message: ', myMsg.current.value);
    sendMessage(myMsg.current.value);
  };

  return (
    <div className="write_area">
      <textarea ref={myMsg} className="write_area__text" />
      <button type="button" className="write_area__send" onClick={send}>Send</button>
    </div>
  );
}
