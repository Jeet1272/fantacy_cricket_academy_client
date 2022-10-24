import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
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
                        className="fs-5 ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Courses</Nav.Link>
                        <Nav.Link href="#action3">Blog</Nav.Link>
                        <Nav.Link to='/about'>About Us</Nav.Link>
                        <Nav.Link to='/about'>Log In</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;