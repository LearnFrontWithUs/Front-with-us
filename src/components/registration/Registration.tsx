import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { NavLink } from 'react-router-dom'
import styles from './Registration.module.scss'
import {AppStateType} from "../../redux/store";
import { RegistrationTC } from '../../redux/registrationReducer/registrationReducer';

export const Registration = () => {
    const dispatch = useDispatch()
    const success = useSelector<AppStateType,boolean>(state => state.registrationReducer.success)
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const onClick = () => {
        dispatch(RegistrationTC(email,pass))
    }
    const onChangeHandlerEmail = (e:any) => {
        setEmail(e.currentTarget.value)
    }
    const onChangeHandlerPass = (e:any) => {
        setPass(e.currentTarget.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.box}>
<h1>it-incubator</h1>
                <h2>
                    sign in
                </h2>
                <input value={email} onChange={onChangeHandlerEmail}/>
                <input value={pass} onChange={onChangeHandlerPass}/>
                <p>Forgot Password</p>
                <button onClick={onClick}>
                    Login
                </button>
                <p>
                    Don’t have an account?
                </p>
                <NavLink to={'/'}>Sign Up</NavLink>
            </div>
        </div>
    )
}
