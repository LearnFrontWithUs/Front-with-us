import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.module.scss';
import Profile from './components/Main/Profile/Profile';
import {PageNotFounded} from './components/Main/PageNotFounded/PageNotFounded';
import Header from './components/Header/Header';
import { Registration } from './components/registration/Registration';
import {Login} from "./components/login/Login";

const App = () => {
    const PATH = {
        AUTH: '/auth',
        LOGIN: '/login',
        PROFILE: '/profile',
        REGISTRATION:'/registration',
    }

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route render={() => <PageNotFounded/>}/>
            </Switch>

        </div>
    );
}

export default App;
