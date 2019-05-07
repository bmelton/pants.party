import React, { Component } from 'react'
import Grid from 'react-css-grid'

class Header extends Component {
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

  render () {
    const isAuthenticated = this.props.auth.isAuthenticated;
    console.log(this.props.auth);

    var tango;
    if(isAuthenticated()) {
      tango = "Hello, you are logged in.";
    } else {
      tango = "You are not logged in.";
    }

    return (
      <Grid width={280} gap={16}>
        <div>
          { tango } 
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
          {
            !isAuthenticated() && (
              <span>
                <a href="#login" onClick={ this.login.bind(this)} label={`Log In`}>Log In</a> &middot;&nbsp;
              </span>
            ) 
          }
          {
            isAuthenticated() && (
              <span>
                <a href="#logout" onClick={ this.logout.bind(this)} label={`Log Out`}>Log Out</a> &middot;&nbsp;
              </span>
            )
          }
          <a href="/">Home</a> &middot;&nbsp;
          <a href="/home">Dashboard</a>
        </div>
      </Grid>
    )
  }
}

export default Header;
