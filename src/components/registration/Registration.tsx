import React from 'react'
import {useDispatch} from 'react-redux'
import styles from './Registration.module.scss'
import {RegistrationTC} from '../../redux/registrationReducer/registrationReducer';
import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
} from '@material-ui/core';
import {useFormik} from 'formik';
import {FormikCustomInput} from '../common/formikCustombutton/formikCustomInput';
import {Button} from '../common/Button/Button';



type FormikErrorType = {
    email?: string
    password?: string
    passwordConfirm?: string
}
export const Registration = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: ''
        },
        validate: values => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            } else if (values.password.length <= 5) {
                errors.password = 'Password must be at least 5 letters long';
            }
            if (values.password !== values.passwordConfirm) {
                errors.passwordConfirm = 'passwords are not match'
                errors.password = 'passwords are not match'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(RegistrationTC(values.email, values.password))
            formik.resetForm()
        }
    })
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h2>it-incubator</h2>
                <h3>Sign Up</h3>
                <form onSubmit={formik.handleSubmit}>
                    <FormControl {...formik.getFieldProps('email')}
                                 error={!!formik.errors.email}>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input
                            id={'email'}
                            value={formik.values.email}
                            onChange={formik.handleChange}/>
                        {!!formik.errors.email && <FormHelperText id="email">{formik.errors.email}
                        </FormHelperText>}
                    </FormControl>
                    <FormControl {...formik.getFieldProps('password')}
                                 error={!!formik.errors.password}>
                        <InputLabel htmlFor={'password'}>Password</InputLabel>
                        <FormikCustomInput color={'primary'}
                                           id={'password'}
                                           value={formik.values.password}
                                           onChange={formik.handleChange}
                                           position={'end'}/>
                        {!!formik.errors.password &&
                        <FormHelperText id="password">{formik.errors.password}</FormHelperText>}
                    </FormControl>
                    <FormControl {...formik.getFieldProps('passwordConfirm')}
                                 error={!!formik.errors.password}>
                        <InputLabel htmlFor={'passwordConfirm'}>Confirm password</InputLabel>
                        <FormikCustomInput color={'primary'}
                                           id={'passwordConfirm'}
                                           value={formik.values.passwordConfirm}
                                           onChange={formik.handleChange}
                                           position={'end'}/>
                        {!!formik.errors.password &&
                        <FormHelperText id="passwordConfirm">{formik.errors.password}</FormHelperText>}
                    </FormControl>
                    <div className={styles.btnContainer}>
                        <Button type={'button'}>Cancel</Button>
                        <Button type={'submit'} secondary>Register</Button>
                    </div>
                </form>

            </div>
        </div>
    )
}
