import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')
    const googleProvider = new GoogleAuthProvider()

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div>
                <Form onSubmit={handleSubmit} className='bg-light w-50 mx-auto border border-success mt-5 px-3'>
                    <Form.Group className="my-2" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="my-2" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                    </Form.Group>

                    <p className='text-danger'>{errorMessage}</p>

                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                    <p><small>
                        Don’t have an account yet? <Link to='/register'>Sign Up</Link>
                    </small></p>
                </Form>
            </div>
            <div className="d-grid gap-3 w-25 mx-auto mb-3">
                <p className='ms-4 mt-3'>Please log in with one of the following:</p>
                <Button variant="dark" size="md">
                    Github
                </Button>
                <Button onClick={handleGoogleSignIn} variant="warning" size="md">
                    Google
                </Button>
                <Button variant="secondary" size="md">
                    <Link className='text-white text-decoration-none' to='/register'>Email</Link>
                </Button>

            </div>
        </div>
    );
};

export default Login;