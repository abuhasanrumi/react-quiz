import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Button from './Button';
import Form from './Form';
import TextInput from './TextInput';

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState()

    const { login } = useAuth()
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await login(email, password)
            navigate("/")

        } catch (err) {
            console.log(err)
            setLoading(false)
            setError("Failed to login")

        }

    }
    return (
        <Form style={{ height: "330px" }} className="login" onSubmit={handleSubmit}>
            <TextInput type="text" placeholder="Enter email" icon="alternate_email" value={email} required onChange={(e) => setEmail(e.target.value)} />
            <TextInput type="password" placeholder="Enter password" icon="lock" value={password} required onChange={(e) => setPassword(e.target.value)} />
            <Button disabled={loading} onClick={handleSubmit} type="button"><span>Login</span></Button>
            {error && <p className='error'>{error}</p>}
            <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
        </Form>
    )
}

export default LoginForm