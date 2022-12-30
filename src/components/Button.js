import React from 'react'
import classes from "../styles/Button.module.css"

function Button({ className, children }) {
    return (
        <div className={`${classes.button} ${className}`}>
            {children}
        </div>
    )
}

export default Button