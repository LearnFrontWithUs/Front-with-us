import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.module.scss';
import Auth from './components/Main/Authentefication/Auth/Auth';
import Profile from './components/Main/Profile/Profile';
import {PageNotFounded} from './components/Main/PageNotFounded/PageNotFounded';
import Login from './components/Main/Authentefication/Login/Login';
import Header from './components/Header/Header';
import { Registration } from './components/registration/Registration';

const App = () => {

    const PATH = {
        AUTH: '/auth',
        LOGIN: 'auth/login',
        PROFILE: '/profile',
        REGISTRATION:'/registration',
    }

    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path={PATH.AUTH} render={() => <Auth/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route render={() => <PageNotFounded/>}/>
            </Switch>

        </div>
    );
}

export default App;
