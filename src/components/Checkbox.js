import React from 'react'

function Checkbox({ text, ...rest }) {
    return (
        <label>
            <input {...rest} />
            <span>{text}</span>
        </label>
    )
}

export default Checkbox