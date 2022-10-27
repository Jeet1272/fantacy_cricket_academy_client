import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photoURL.value;
        console.log(name, password, email);
        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setErrorMessage('')
                form.reset()
            })
            .catch(error => {
                const errorMessage = error.message;
                setErrorMessage(errorMessage)
            })
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='bg-light w-50 mx-auto border border-success m-5 p-3'>

                <Form.Group controlId="formGridName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridPhotoURL">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type='text' name='photoURL' placeholder="Photo URL" />
                </Form.Group>


                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Age</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>10-15</option>
                            <option>16-20</option>
                            <option>20-25</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <p className='text-danger'>{errorMessage}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-2'>
                    <small>Already have an account?   <Link to='/login'>Log In</Link> </small>
                </p>
            </Form>
        </div>
    );
};

export default Register;