import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import sendMessage, { preloadMessages } from '../actions/PageAction';
import './App.css';


const mapStateToProps = (store) => {
  console.log('store: ', store);
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = (dispatch) => ({
  sendMessageAction: (msg) => dispatch(sendMessage(msg)),
  preloadMessagesAction: () => dispatch(preloadMessages()),
});

function App(props) {
  const {
    user, page, sendMessageAction, preloadMessagesAction,
  } = props;

  useEffect(() => {
    if (page.messages.length === 0) {
      console.warn('start!!!!!');
      preloadMessagesAction();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-wrapper">
          <h1>Chatterbox</h1>
          <User name={user.name} />
        </div>
      </header>
      <Page
        messages={page.messages}
        sendMessage={sendMessageAction}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
