import React from 'react'
import ReactDOM from 'react-dom'
import Login from './loginComp/login.jsx'
import {Route,NavLink,BrowserRouter as Router,Switch} from 'react-router-dom'
import SetPassword from './loginComp/setPassword.jsx'
import ForgotPassword from './loginComp/forgotPassword.jsx'
import NotFoundErrorPage from './loginComp/notFound.jsx'
import Profile from './ProfileComp/profile.jsx'
// import HeaderComponent from './headerComp.jsx'
// import './index.css'
const Routing=()=>(
    <Router>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/setpassword" component={SetPassword}/>
            <Route path="/forgotpassword" component={ForgotPassword}/>
            <Route path="/profile" component={Profile}></Route>
            <Route component={NotFoundErrorPage}/>
        </Switch>
    </Router>
)

export default Routing;
// ReactDOM.render(routing, document.getElementById('app'));
// ReactDOM.render(<HeaderComponent/>,document.getElementById('headerComponent'));