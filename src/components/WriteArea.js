import React, { useRef } from 'react';

export default function WriteArea(props) {
  const { sendMessage, userName } = props;
  const myMsg = useRef(null);
  const send = () => {
    sendMessage({ from: userName, message: myMsg.current.value });
  };

  return (
    <div className="write_area">
      <div className="write_area__wrap">
        <textarea ref={myMsg} className="write_area__text" />
        <button type="button" className="write_area__send" onClick={send}>Send</button>
      </div>
    </div>
  );
}
