import React from 'react'
import classes from "../styles/Button.module.css"

function Button({ className, children, ...rest }) {
    return (
        <button className={`${classes.button} ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button