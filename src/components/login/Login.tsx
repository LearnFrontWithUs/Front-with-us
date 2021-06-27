import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './Login.module.scss'
import {useFormik} from "formik";
import {FormControl, FormControlLabel, FormHelperText, Input, InputLabel} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import {FormikCustomInput} from "../common/formikCustombutton/formikCustomInput";
import {Button} from "../common/Button/Button";
import {loginTC} from "../../redux/loginReducer/loginReducer";



type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}
type FormPropsType = {
    styles:any

}
export const Login = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: 'learnfrontwithus@gmail.com',
            password: 'incubatorcrew',
            rememberMe: false,
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'password is required';
            } else if (values.password.length <= 7) {
                errors.password = 'password must be at least 7 letters long';
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(loginTC(formik.values.email,formik.values.password,formik.values.rememberMe))
            formik.resetForm()
        }
    })
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2>incu</h2>
                <h3>Sign in</h3>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl {...formik.getFieldProps('email')}
                                 error={!!formik.errors.email}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            {...formik.getFieldProps('email')}
                            id={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            aria-describedby={'email-error'}/>
                        {!!formik.errors.email && <FormHelperText id="email-error">{formik.errors.email}</FormHelperText>}
                    </FormControl>
                    <FormControl {...formik.getFieldProps('password')}
                                 error={!!formik.errors.password}
                                 className={styles.controlInputs}>
                        <InputLabel htmlFor={"password"}>Password</InputLabel>
                        <FormikCustomInput
                            color={'primary'}
                            id={"password"}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            position='end'/>
                        {!!formik.errors.password &&
                        <FormHelperText id="password-error">{formik.errors.password}</FormHelperText>}
                    </FormControl>
                        <NavLink className={styles.navLinkForgotBox} to={'/restore-password'}>
                            Forgot Password
                        </NavLink>
                        <Button type={'submit'}>
                            Login
                        </Button>
                </form>
                <p>Don’t have an account?</p>
                <NavLink to={'/restore-password'}>
                    Sign up
                </NavLink>
            </div>
        </div>
    )
}
