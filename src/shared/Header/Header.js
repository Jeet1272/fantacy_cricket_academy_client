import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Image src='https://media.istockphoto.com/vectors/sport-ball-on-background-of-stylized-shield-with-wings-cricket-vector-id1302794887?k=20&m=1302794887&s=612x612&w=0&h=U9GkBqD6z4Ci58p7OCeb8r25iOy41YozEP-K89mc_Pc=' className='header-logo' ></Image>
                <Navbar.Brand className='fs-2 text-success'>Fantasy Cricket Academy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto m-2 my-lg-0 text-success"
                        navbarScroll
                    >
                        <Link className='mx-2 text-decoration-none text-success' to='/'>Home</Link>
                        <Link className='mx-2 text-decoration-none text-success' to='/courses'>Courses</Link>
                        <Link className='mx-2 text-decoration-none text-success' to='/blog'>Blog</Link>
                        <Link className='mx-2 text-decoration-none text-success' to='/about'>About Us</Link>
                        <Link className='mx-2 text-decoration-none text-success' to='/login'>Log In</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;