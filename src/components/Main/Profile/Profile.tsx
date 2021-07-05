import React from 'react';
import {LogoutTC} from '../../../redux/loginReducer/loginReducer';
import {useDispatch, useSelector} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {AppStateType} from '../../../redux/store';


const Profile = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state: AppStateType) => state.login.isLoggedIn)

    const logOut = () => {
        dispatch(LogoutTC())
    }

    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div className=''>
            <h2>Profile</h2>
            <button onClick={logOut}>LogOut
            </button>


        </div>

    )
}

export default Profile;
