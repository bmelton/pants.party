import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {withRouter} from 'react-router';

import './App.css';
import { blue, blueGrey } from '@material-ui/core/colors'

import Routes from './routes';

import dotenv from 'dotenv';
dotenv.config();

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: blue[900]
    },
    primary: {
      main: blueGrey[900]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '"Lato"',
      'sans-serif'
    ].join(',')
  }
});

/*
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

  /*
  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
      console.log(this.props);
    return (
      <div>
        <Route exact path='/callback' render={() => (
          <Callback auth={this.props.auth}/>
        )}/>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </div>
    );
  }
}
*/

function login(props) {
  return ( 
    <button onClick={props.auth.login}>Log in</button>
  )
}
function App(props) {
  const { renewSession } = props.auth;
  if (localStorage.getItem('isLoggedIn') === 'true') {
    renewSession();
    console.log(props.auth);
  }

  const authenticated = props.authenticated;

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Routes authenticated={authenticated} auth={props.auth} history={props.history} />
      </MuiThemeProvider>
    </div>
  );
}

export default withRouter(App);
