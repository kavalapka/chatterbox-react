import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import sendMessage, { getMessages } from '../actions/PageAction';
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
  getMessagesAction: () => dispatch(getMessages()),
});

function App(props) {
  const {
    user, page, sendMessageAction, getMessagesAction,
  } = props;

  useEffect(() => {
    if (page.messages.length === 0) {
      console.warn('start!!!!!');
      getMessagesAction();
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatterbox</h1>
        <User name={user.name} />
      </header>
      <Page
        messages={page.messages}
        sendMessage={sendMessageAction}
        getMessages={getMessagesAction}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
