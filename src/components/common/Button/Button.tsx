import React, {FC} from 'react'
import styles from './Button.module.scss'
import classNames from "classnames";
type buttonPropsType = {
    secondary?:boolean
    type:'submit' | 'button'
}
export const Button:FC<buttonPropsType> = ({children,secondary,type}) => {
    return (
        <button type={type} className={classNames(styles.default, {
            [styles.secondary] : secondary
        })}>
            {children}
        </button>
    )
}
