import React from 'react';
import ReactDOM from 'react-dom';
import 'gestalt/dist/gestalt.css'
import Navbar from './components/Navbar'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Checkout from './components/Checkout';
import Brews from './components/Brews';

const getToken = (tokenKey = "jwt") => {
    if(localStorage && localStorage.getItem(tokenKey)) {
        return JSON.parse(localStorage.getItem(tokenKey))
    }
    return null
}

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render= { props => (
        getToken() !== null 
            ? <Component {...props} /> 
            : <Redirect to={{ pathname: '/signin', state: { from: props.location } }} />
    )} />
)

const Root = () => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <PrivateRoute path="/checkout" component={Checkout} />
                <Route path="/:brandId" component={Brews} />
                                
            </Switch>
        </React.Fragment>
    </BrowserRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();