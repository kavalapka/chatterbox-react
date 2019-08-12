import React from 'react';
import { connect } from 'react-redux';
import User from '../components/User';
import Page from '../components/Page';
import './App.css';


const mapStateToProps = (store) => {
  console.log('store: ', store);
  return {
    user: store.user,
    page: store.page,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   loginUser: (userName) => dispatch(loginUser(userName)),
// });

function App(props) {
  const { user, page } = props;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chatterbox</h1>
      </header>
      <User name={user.name} />
      <Page messages={page.messages} />
    </div>
  );
}

export default connect(mapStateToProps)(App);
