import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import sendMessage, { preloadMessages } from '../actions/PageAction';
import loginUser, { showLoginForm, allowNotify } from '../actions/UserAction';
import './App.css';


const mapStateToProps = (store) => ({
  user: store.user,
  page: store.page,
});

const mapDispatchToProps = (dispatch) => ({
  sendMessageAction: (msg) => dispatch(sendMessage(msg)),
  preloadMessagesAction: () => dispatch(preloadMessages()),
  showLoginFormAction: () => dispatch(showLoginForm()),
  loginUserAction: (name) => dispatch(loginUser(name)),
  allowNotifyAction: () => dispatch(allowNotify()),
});

function App(props) {
  const {
    user, page, sendMessageAction, preloadMessagesAction, showLoginFormAction, loginUserAction,
    allowNotifyAction,
  } = props;

  useEffect(() => {
    if (!localStorage.getItem('CHATTERBOX_USERNAME') && !user.showLoginForm) {
      showLoginFormAction();
    }

    if (localStorage.getItem('CHATTERBOX_USERNAME') && !page.messages.length) {
      preloadMessagesAction();
    }

    if (user.allowNotify === 'default') {
      Notification.requestPermission().then((result) => {
        if (result === 'granted') {
          allowNotifyAction();
        }
      });
    }
  });

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <div className="header-wrapper">
            <h1>Chatterbox</h1>
            <User changeName={showLoginFormAction} name={user.name} />
          </div>
        </header>
        <Page
          messages={page.messages}
          sendMessage={sendMessageAction}
          showLogin={user.showLoginForm}
          setUserName={loginUserAction}
          userName={user.name}
          notify={user.allowNotify}
        />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
