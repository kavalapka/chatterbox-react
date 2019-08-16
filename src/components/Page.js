import React from 'react';
import GroupChat from './GroupChat';
import WriteArea from './WriteArea';
import LoginForm from './LoginForm';

export default function Page(props) {
  const {
    messages, sendMessage, showLogin, setUserName, userName,
  } = props;

  let showFromChat;
  if (showLogin) {
    showFromChat = (<LoginForm showForm={showLogin} setUserName={setUserName} />);
  } else {
    showFromChat = (
      <>
        <GroupChat setUserName={setUserName} showLogin={showLogin} messages={messages} />
        <WriteArea sendMessage={sendMessage} userName={userName} />
      </>
    );
  }

  return (
    <div className="page_container">
      {showFromChat}
    </div>
  );
}
