import React, { Component } from 'react';
import './App.css';
import Header from './features/Header/Header';

import dotenv from 'dotenv';
dotenv.config();

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    return (
      <div>
        <Header auth={ this.props.auth } />
      </div>
    );
  }
}

console.log(process.env);

export default App;
