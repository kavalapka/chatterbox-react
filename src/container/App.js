import React from 'react';
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

const mapDispatchToProps = (dispatch) => {
  console.log('dispatch Page: ', dispatch);
  return {
    sendMessageAction: (msg) => dispatch(sendMessage(msg)),
    getMessagesAction: () => dispatch(getMessages),
  };
};

function App(props) {
  const {
    user, page, sendMessageAction, getMessagesAction,
  } = props;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatterbox</h1>
      </header>
      <User name={user.name} />
      <Page
        messages={page.messages}
        sendMessage={sendMessageAction}
        getMessages={getMessagesAction}
      />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
