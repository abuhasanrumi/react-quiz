import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Checkbox from './Checkbox';
import Form from './Form';
import TextInput from './TextInput';

function SignupForm() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("")
    const [agree, setAgree] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()

    const { signUp } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            return setError("Passwords aren't matching")
        }

        try {
            setError("")
            setLoading(true)
            await signUp(email, password, username)
            navigate("/")

        } catch (err) {
            console.log(err)
            setLoading(false)
            setError("Failed to signup")

        }

    }

    return (
        <Form className="signup" style={{ height: "500px" }} onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Enter name" icon="person" required value={username} onChange={(e) => setUsername(e.target.value)} />
            <TextInput type="text" placeholder="Enter email" icon="alternate_email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextInput type="password" placeholder="Enter password" icon="lock" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextInput type="password" placeholder="Confirm password" icon="lock_clock" required value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
            <Checkbox type="checkbox" text=" I agree to the Terms & Conditions" required value={agree} onChange={(e) => setAgree(e.target.value)} />
            <Button type="submit" disabled={loading}><span>Sign Up</span></Button>
            {error && <p className='error'>{error}</p>}
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    )
}

export default SignupForm