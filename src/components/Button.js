import React from 'react'
import classes from "../styles/Button.module.css"

function Button({ text }) {
    return (
        <div className={classes.button}>
            <span>{text}</span>
        </div>
    )
}

export default Button