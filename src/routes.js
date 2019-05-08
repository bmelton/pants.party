import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Pricing from './components/Pricing/Pricing';
import Auth from './Auth/Auth';
import Dashboard from './components/Dashboard/Dashboard';
import BasicTemplate from './components/Template/Basic';
import Callback from './Callback/Callback';
// import ScrollToTop from './components/ScrollToTop'

const auth = new Auth();

/*
const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}
*/

/*
export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={App} auth={auth} />} />
            <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/pricing" render={(props) => <Pricing {...props} />} />
            <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} /> 
            }}/>
          </Switch>
        </div>
      </Router>
  );
}
*/

/*
export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={BasicTemplate} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/pricing" component={Pricing} />
    </Switch>
  </BrowserRouter>
)
*/

export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" 
        render={
          (props) => <BasicTemplate {...props} auth={props.auth} authenticated={props.authenticated} />
        }/>
      <Route exact path="/home" 
        render={
          (props) => <Dashboard {...props} auth={props.auth} authenticated={props.authenticated} />
        }/>
      <Route exact path="/dashboard" 
        render={
          (props) => <Dashboard {...props} auth={props.auth} authenticated={props.authenticated} />
        }/>
      <Route exact path="/pricing" 
        render={
          (props) => <Pricing {...props} auth={props.auth} authenticated={props.authenticated} />
        }/>
      <Route exact path='/callback' render={() => (
        <Callback auth={props.auth}/>
      )}/>
    </Switch>
  </BrowserRouter>
    
)
