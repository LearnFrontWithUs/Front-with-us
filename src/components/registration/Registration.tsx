import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Registration.module.scss'

export const Registration = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
<h1>it-incubator</h1>
                <h2>
                    sign in
                </h2>
                <input/>
                <input/>
                <p>Forgot Password</p>
                <button>
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
