import React from 'react'
import signupImg from "../../assets/images/signup.svg"
import classes from "../../styles/Signup.module.css"
import Button from '../Button'
import Checkbox from '../Checkbox'
import Form from '../Form'
import Illustration from '../Illustration'
import TextInput from '../TextInput'

function Signup() {
    return (
        <>
            <h1>Create an account</h1>
            <div class="column">
                <Illustration img={signupImg} />
                <Form className={classes.signup}>
                    <TextInput type="text" placeholder="Enter name" icon="person" />
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox type="checkbox" text=" I agree to the Terms & Conditions" />
                    <Button text="Submit now" />
                    <div class="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Signup