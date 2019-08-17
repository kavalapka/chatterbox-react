import React, { useRef } from 'react';

export default function WriteArea(props) {
  const { sendMessage, userName } = props;
  const myMsg = useRef(null);
  const send = () => {
    sendMessage({ from: userName, message: myMsg.current.value });
    myMsg.current.value = '';
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="write_area">
      <div className="write_area__wrap">
        <textarea ref={myMsg} onKeyPress={handleKeyPress} className="write_area__text" />
        <button type="button" className="write_area__send" onClick={send}>Send</button>
      </div>
    </div>
  );
}
