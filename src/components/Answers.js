import React, { Fragment } from 'react';
import classes from "../styles/Answers.module.css";
import Checkbox from './Checkbox';

function Answers({ options = [], handleChange, input }) {
    return (
        <div className={classes.answers}>
            {
                options.map((option, index) => (
                    <Fragment key={index}>
                        {

                            input ? (
                                <Checkbox className={classes.answer} text={option.title} value={index} checked={option.checked} onChange={(e) => handleChange(e, index)} />
                            ) : (
                                <Checkbox className={`${classes.answer} ${option.correct ? classes.correct : option.checked ? classes.wrong : null}`} text={option.title} defaultChecked={option.checked} disabled />
                            )
                        }
                    </Fragment>
                ))
            }
        </div>
    )
}

export default Answers